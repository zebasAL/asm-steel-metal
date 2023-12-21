import { useState } from "react";
import ContactHeader from "./ContactHeader"
import ContactBody from "./ContactBody"
import { address, Address } from "~/mock/locations/companyAddress"

type Props = {
  children?: JSX.Element,
}

export default function Contact({ children }: Props) {
  const [selectedLocation, setLocation] = useState(address[0])

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
