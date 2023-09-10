"use client";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

// types
import type { UserType } from "@/types/userType";

// components
import { ChannelBox } from "./ChannelBox";
import { ChannelImage } from "./ChannelImage";
import { ChannelTitle, LastMessage } from "./ChannelTitle";
import { ChannelInfoBox } from "./ChannelInfoBox";
import { MessageNumber } from "../commonStyles/MessageNumber";

type UserProps = {
  users: UserType[];
};

const ChannelList: FC<UserProps> = ({ users }) => {
  return (
    <>
      {users.map((user: UserType) => (
        <Link href={`/user/${user?.id}`} key={user?.id}>
          <ChannelBox>
            <ChannelImage>
              <Image
                src={user?.avatar}
                alt={user?.first_name}
                layout="fill"
                style={{ borderRadius: "50%" }}
              />
            </ChannelImage>
            <ChannelInfoBox>
              <div>
                <ChannelTitle>
                  {user?.first_name} {user?.last_name}
                </ChannelTitle>
                <LastMessage variant="font">
                  {" "}
                  {user.email}
                  {user.email}{" "}
                </LastMessage>
              </div>
              <div>
                <MessageNumber> 3 </MessageNumber>
                <ChannelTitle variant="time"> 11:45 </ChannelTitle>
              </div>
            </ChannelInfoBox>
          </ChannelBox>
        </Link>
      ))}
    </>
  );
};

export default ChannelList;
