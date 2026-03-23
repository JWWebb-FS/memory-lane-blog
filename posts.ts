// posts.ts
export const posts = [
  {
    id: "learning-nextjs",
    title: "The Power of Next.js",
    date: "March 10, 2026",
    content:
      "Today I deployed my first Next.js site to Vercel. The automatic routing and static export features make it a perfect tool for building fast, modern blogs like Memory Lane.",
  },
  {
    id: "tailwind-css-tips",
    title: "Styling with Tailwind",
    date: "March 9, 2026",
    content:
      "Using Tailwind CSS allowed me to hit the 'Unique CSS' requirement for my assignment quickly. Being able to style components directly in the HTML saves so much time.",
  },
  {
    id: "full-sail-journey",
    title: "Web Development at Full Sail",
    date: "March 8, 2026",
    content:
      "This month has been intense but rewarding. Learning to manage repositories on GitHub and deploying live sites is a massive step toward becoming a professional developer.",
  },
  {
    id: "mtg-tracker-project",
    title: "Beyond the Rulebook: Building a Custom MTG Tracker",
    date: "March 16, 2026",
    image: "/images/emrakul.jpg",
    content: `As a developer and a Magic: The Gathering player, I often find that "official" tools don't always cover the way my playgroup actually plays. Whether it’s specific house rules or keeping track of card errata for my colorless deck, I needed something more tailored. 

This week, I’ve been working on a custom MTG tracking app using React and Next.js. The goal is simple: create a clean interface that manages dynamic house rules and provides quick access to specific card clarifications that the standard apps might miss.

Key features I'm focusing on:
- Custom Rule Toggles: Easily switch between standard play and our group's specific house rules.
- Errata Logs: A quick-reference section for cards that have had significant text updates.
- State Management: Using React to ensure the life totals and rule changes update instantly.

Building this has been a great way to practice state management and routing in a real-world scenario. It's one thing to follow a tutorial, but it’s another to build a tool you’ll actually use at the table next Friday night.`,
  },
  {
    id: "deploying-to-multiple-platforms",
    title: "The Reality of Deployment: Troubleshooting Vercel",
    date: "March 23, 2026",
    image: "/deployment-error.png",
    content:
      "Deploying a Next.js site isn't always as simple as clicking a button. This week, I ran into a common but frustrating hurdle while connecting my GitHub repository to Vercel: the 'No Next.js version detected' error. This usually happens when the deployment platform looks at the root of the repository but can't find the package.json file. In my case, I had to manually adjust the 'Root Directory' in the Vercel settings to point exactly to my project folder. Learning to manage these environment configurations is just as important as writing the code itself, as it ensures that the automated build pipeline can correctly install dependencies and execute the production build.",
  },
];
