import { MapPin, Phone, Clock } from "lucide-react";
import { Heading } from "@react-workshop/ui/heading";
import { Text } from "@react-workshop/ui/text";

export function ContactInfo() {
  return (
    <aside className="grid content-start gap-10 px-8">
      <div className="flex gap-7">
        <MapPin className="h-7 w-7 shrink-0 text-black mt-1" />
        <div>
          <Heading asComponent="h3" size="2xl" weight="medium" className="text-2xl">
            Address
          </Heading>
          <Text className="mt-2 max-w-53 text-black">
            236 5th SE Avenue, New York NY10000, United States
          </Text>
        </div>
      </div>
      <div className="flex gap-7">
        <Phone className="h-7 w-7 shrink-0 text-black mt-1" />
        <div>
          <Heading asComponent="h3" size="2xl" weight="medium" className="text-2xl">
            Phone
          </Heading>
          <Text className="mt-2 text-black">
            Mobile: +(84) 546-6789
            <br />
            Hotline: +(84) 456-6789
          </Text>
        </div>
      </div>
      <div className="flex gap-7">
        <Clock className="h-7 w-7 shrink-0 text-black mt-1" />
        <div>
          <Heading asComponent="h3" size="2xl" weight="medium" className="text-2xl">
            Working Time
          </Heading>
          <Text className="mt-2 text-black">
            Monday-Friday: 9:00 - 22:00
            <br />
            Saturday-Sunday: 9:00 - 21:00
          </Text>
        </div>
      </div>
    </aside>
  );
}
