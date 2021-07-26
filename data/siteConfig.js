const config = {
  siteTitle: "Gatsby", // Site title.
  siteShortDesc: "Gatsby advanced starter blog",
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://gatsby-portfolio-qhcubl459-starjardin.vercel.app/", // Domain of your website without pathPrefix.
  siteDescription: "A GatsbyJS stater with Advanced design in mind.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Tantely", // Username to display in the author segment.
  userEmail: "tantely@onja.org", // Email used for RSS feed's author segment
  userLocation: "Madagascar", // User location to display in the author segment.
  userAvatar: "", // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like traveling. I just enjoy seeing new places. I'm always passionate about new things, so that is why traveling to a new place is on of my favourites... I like meeting strangers because it broaden my visions of understanding people. I'm not really fan of watching movies but I'm ok with it, I prefer reading books instead. It is preferable for to live in a peaceful house, surrounded by green spaces would be the best - my dream house.",
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "github",
      username: "starjardin",
    },
    {
      label: "twitter",
      username: "Honey",
    },
    {
      label: "linkedIn",
      username: "Tantely",
    },
  ],
  copyright: "Copyright © 2019. Advanced User", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
}
// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`

module.exports = config
