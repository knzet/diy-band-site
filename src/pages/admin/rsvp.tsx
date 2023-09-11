import RSVPCard from "~/components/RSVPCard";
import { api } from "~/utils/api";

export default function RSVP() {
  const { data: user, isLoading: userLoading } = api.user.me.useQuery();
  const { data: allRsvps } = api.rsvp.getAll.useQuery();
  return (
    <div>
      <h1>RSVP management</h1>
      <div className="">
        {allRsvps?.map((rsvp) => (
          <RSVPCard rsvp={rsvp} />
        ))}
      </div>
    </div>
  );
}
