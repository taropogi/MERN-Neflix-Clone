import SiteMapLink from "./SiteMapLink";

export default function SiteMap() {
  return (
    <div className="py-20 bg-black text-white flex     sm:px-24  md:px-52 px-10  items-start md:items-center justify-between">
      <div className="flex-1">
        <ul className="space-y-2">
          <SiteMapLink>Question? Contact us</SiteMapLink>
          <SiteMapLink>FAQ</SiteMapLink>
          <SiteMapLink>Investor Relations</SiteMapLink>
          <SiteMapLink>Ways to Watch</SiteMapLink>
          <SiteMapLink>Corporation Information</SiteMapLink>
          <SiteMapLink>Only on Netflix</SiteMapLink>
        </ul>
      </div>
      <div className="flex-1 ">
        <ul className="space-y-2">
          <SiteMapLink>Help Center</SiteMapLink>
          <SiteMapLink>Jobs</SiteMapLink>
          <SiteMapLink>Terms of Use</SiteMapLink>
          <SiteMapLink>Contact Us</SiteMapLink>
        </ul>
      </div>
      <div className="flex-1">
        <ul className="space-y-2">
          <SiteMapLink>Account</SiteMapLink>
          <SiteMapLink>Redeem Gift Cards</SiteMapLink>
          <SiteMapLink>Privacy</SiteMapLink>
          <SiteMapLink>Speed Test</SiteMapLink>
        </ul>
      </div>
      <div className="flex-1">
        <ul className="space-y-2">
          <SiteMapLink>Media Center</SiteMapLink>
          <SiteMapLink>Buy Gift Cards</SiteMapLink>
          <SiteMapLink>Cookie Preferences</SiteMapLink>
          <SiteMapLink>Legal Notices</SiteMapLink>
        </ul>
      </div>
    </div>
  );
}
