import RSVPCard from "~/components/RSVPCard";
import { api } from "~/utils/api";

export default function RSVP() {
  const { data: user, isLoading: userLoading } = api.user.me.useQuery();
  const { data: allRsvps } = api.rsvp.getAll.useQuery();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#f7d488ff] to-[#eaefb1ff]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1>RSVP management</h1>
        <div className="">
          {allRsvps?.map((rsvp) => (
            <RSVPCard rsvp={rsvp} />
          ))}
        </div>
      </div>
    </main>
  );
}
