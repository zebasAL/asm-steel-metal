import { useState } from "react";
import ContactHeader from "./ContactHeader"
import ContactBody from "./ContactBody"
import { address, Address } from "~/mock/locations/companyAddress"

export default function Contact() {
  const [selectedLocation, setLocation] = useState<Address | null>(address[0] ?? null)

  const handleLocation = (index: Address) => {
    setLocation(index)
  }

  return (
    <div>
      <ContactHeader
        locations={address}
        selectedLocation={selectedLocation}
        handleClickLocation={handleLocation}
      />

      <ContactBody location={selectedLocation} />
    </div>
  );
}
