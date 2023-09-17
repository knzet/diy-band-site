import { Button } from "@mantine/core";
import { IconPencil } from "@tabler/icons-react";
import classNames from "classnames";
import { useEffect, useState } from "react";
import RSVPCard from "~/components/RSVPCard";
import { api } from "~/utils/api";

export default function RSVP() {
  const { data: allRsvps } = api.rsvp.getAll.useQuery();
  const [filters, setFilters] = useState<{ key: string, value: any }[]>([])
  const [filteredData, setFilteredData] = useState(allRsvps)
  useEffect(
    () => {
      let filtered = allRsvps;
      for (let filter of filters) {
        filtered = filtered?.filter((v) => {
          // todo better general filter
          return v[filter.key as unknown as keyof typeof v] === filter.value
        })
      }
      setFilteredData(filtered)
    }
    , [filters, allRsvps])
  return (
    <main className="flex min-h-screen max-w-screen flex-col items-center justify-center bg-gradient-to-b from-[#f7d488ff] to-[#eaefb1ff]">
      <div className="container flex flex-col items-center justify-center gap-2 px-4 ">
        <h1>RSVP management</h1>
        <div>Filter: {filters.map(filter => filter.key + ': ' + filter.value as string).join(', ')}</div>
        <div>Count: {filteredData?.length || 0}/{allRsvps?.length}</div>
        <div className={classNames('flex flex-row bg-slate-200 p-4')}>
          <Button onClick={() => setFilters([{
            key: 'coverRequired',
            value: false
          }])} className="bg-slate-600 mx-2">Free</Button>
          <Button onClick={() => setFilters([{
            key: 'coverRequired',
            value: true
          }])} className="bg-slate-600 mx-2">Paid</Button>
        </div>
        <div className='flex flex-row bg-slate-200 p-4'>
          <Button onClick={() => setFilters([{
            key: 'approved',
            value: true
          }])} className="bg-slate-600 mx-2">Approved</Button>
          <Button onClick={() => setFilters([{
            key: 'approved',
            value: false
          }, {
            key: 'rejected',
            value: false
          }])} className="bg-slate-600 mx-2">Pending</Button>
          <Button onClick={() => setFilters([{
            key: 'rejected',
            value: true
          }])} className="bg-slate-600 mx-2">Rejected</Button>
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
