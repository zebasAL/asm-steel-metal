import useTranslation from 'next-translate/useTranslation'
import LocationBox from "~/components/contact/LocationBox"
import { Address } from "~/mock/locations/companyAddress"

type ContactHeader = {
  locations: Address[] | [],
  selectedLocation: Address | null,
  handleClickLocation: (arg: Address) => void,
}

export default function ContactHeader({ locations, selectedLocation, handleClickLocation }: ContactHeader) {
  const { t: contactT } = useTranslation('contact');

  return (
    <section className="w-[fit-content] relative bg-blend-multiply bg-no-repeat bg-center bg-cover" style={{ padding: "2rem", color: "#fff" }}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-blend-multiply"
        style={{
          backgroundImage: "url(https://media.licdn.com/dms/image/D4D22AQE7hsyASCFCow/feedshare-shrink_1280/0/1702314322672?e=1705536000&v=beta&t=VgG7qnUJP_OftGlhNXkDdULWIxAt7qhj-FmXe_w0QhA)",
          filter: "grayscale(70%) blur(1.5px)",
        }}
      />
      <div className="absolute bottom-[-1px] left-0 w-full h-1 bg-gray-400" />

      <div className="w-full relative z-10">
        <div className="relative grid gap-2 md:grid-cols-2 md:gap-8 max-w-7xl mx-auto p-0 sm:p-6 md:p-8 lg:grid-cols-2">
          <div className="mb-8 md:mb-0">
            <div className="mb-6">
              <h1 className="mb-1 text-4xl bg-gray-800 bg-opacity-0 font-extrabold tracking-tight text-white" style={{ textShadow: "0 0 10px black"}}>
                {contactT("title")}
              </h1>
              <p className="text-lg text-gray-200 mb-4" style={{ textShadow: "0 0 10px black" }}>
                {contactT("description")}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-2 md:grid-cols-2 md:gap-8 max-w-7xl mx-auto p-0  md:p-8 lg:grid-cols-2">
          {locations.map((address) => (
            <LocationBox
              key={address.title}
              onClick={() => handleClickLocation(address)}
              selected={selectedLocation?.title === address.title}
              title={address.title}
              address={address.address}
              phone={address.phone}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
