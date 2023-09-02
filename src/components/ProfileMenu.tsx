import { Menu, Button, Text, Avatar } from "@mantine/core";
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from "@tabler/icons-react";
import { signOut } from "next-auth/react";

export default function ProfileMenu({ me }: { me: any }) {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <div>
          {me && (
            <Avatar color="cyan" alt="profile picture">
              {me?.name?.substring(0, 1)}
            </Avatar>
          )}
        </div>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>User</Menu.Label>
        {/* <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
        <Menu.Item icon={<IconMessageCircle size={14} />}>Messages</Menu.Item> */}
        <Menu.Item
          onClick={() => void signOut()}
          icon={<IconPhoto size={14} />}
        >
          <div>Sign Out</div>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
