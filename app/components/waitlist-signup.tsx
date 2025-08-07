"use client";

import { useState, useEffect } from "react";
import { getWaitlistCount } from "../actions/waitlist";
import { XIcon } from "./icons/x-icon";
import { InstagramIcon } from "./icons/instagram-icon";
import { DiscordIcon } from "./icons/discord-icon";
import { RedditIcon } from "./icons/facebook-icon";
import { LinkedInIcon } from "./icons/linkedin-icon";
import { Avatar } from "./avatar";
import { SocialIcon } from "./social-icon";
import { WaitlistForm } from "./waitlist-form";

export function WaitlistSignup() {
  const [waitlistCount, setWaitlistCount] = useState(0);

  useEffect(() => {
    getWaitlistCount().then((count) => setWaitlistCount(count));
  }, []);

  const handleSuccess = (count: number) => {
    setWaitlistCount(count);
  };

  return (
    <div className="w-full max-w-xl mx-auto p-8 flex flex-col justify-between min-h-screen">
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-gray-200 to-gray-600">
            Join Our Extension Launch Waitlist
          </h2>
        </div>
        <div>
          <p className="text-lg sm:text-xl mb-8 text-gray-300">
            Be part of our first launch. Join the waitlist to get updated when
            the extension goes live, and Pre-launch access to our next products.
          </p>
        </div>
        <div className="w-full">
          <WaitlistForm onSuccess={handleSuccess} />
        </div>
        <div>
          <div className="flex items-center justify-center mt-8">
            <div className="flex -space-x-2 mr-4">
              <Avatar initials="ZK" index={0} />
              <Avatar initials="BA" index={1} />
              <Avatar initials="AS" index={2} />
            </div>
            <p className="text-white font-semibold">
              {waitlistCount}+ people on the waitlist
            </p>
          </div>
        </div>
      </div>
      <div className="pt-8 flex justify-center space-x-6">
        <SocialIcon
          href="https://x.com/bitbuilderprod"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (formerly Twitter)"
          icon={<XIcon className="w-6 h-6" />}
        />
        <SocialIcon
          href="https://instagram.com/thezohaibkhalid1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          icon={<InstagramIcon className="w-6 h-6" />}
        />
        <SocialIcon
          href="https://discord.com/users/974004832912420924"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
          icon={<DiscordIcon className="w-6 h-6" />}
        />
        <SocialIcon
          href="https://www.reddit.com/user/thezohaibkhalid/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          icon={<RedditIcon className=" w-6 h-6" />}
        />
        <SocialIcon
          href="https://www.linkedin.com/in/zohaib-khalid-dev/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          icon={<LinkedInIcon className="w-6 h-6" />}
        />
      </div>
    </div>
  );
}
