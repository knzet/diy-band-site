import { Button } from "@mantine/core";
import { IconPencil } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import RSVPCard from "~/components/RSVPCard";
import { api } from "~/utils/api";

export default function RSVP() {
  const { data: user, isLoading: userLoading } = api.user.me.useQuery();
  const { data: allRsvps } = api.rsvp.getAll.useQuery();
  const [filters, setFilters] = useState<{ key: string, value: any } | null>(null)
  const [filteredData, setFilteredData] = useState(allRsvps)
  useEffect(
    () => {
      let filtered = allRsvps;
      if (filters?.key) {
        filtered = allRsvps?.filter((v) => {
          // todo better general filter
          return v[filters.key as unknown as keyof typeof v] === filters.value
        })
      }
      setFilteredData(filtered)
    }
    , [filters, allRsvps])
  return (
    <main className="flex min-h-screen max-w-screen flex-col items-center justify-center bg-gradient-to-b from-[#f7d488ff] to-[#eaefb1ff]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1>RSVP management</h1>
        <div className='flex flex-row'>
          <Button onClick={() => setFilters({
            key: 'coverRequired',
            value: false
          })} className="bg-slate-600 mx-2">Free</Button>
          <Button onClick={() => setFilters({
            key: 'coverRequired',
            value: true
          })} className="bg-slate-600 mx-2">Paid</Button>
          <div>Count: {filteredData?.length || 0}/{allRsvps?.length}</div>
        </div>
        <div className="">
          {filteredData?.map((rsvp) => (
            <RSVPCard rsvp={rsvp} />
          ))}
        </div>
      </div>
    </main>
  );
}
