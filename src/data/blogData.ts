export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "how-to-get-hired-at-quickmart-2026",
    title: "How to Get Hired at Quickmart Kenya in 2026: The Ultimate Guide",
    excerpt: "Want to join Kenya's fastest-growing retail chain? Learn the secrets to a successful application and interview at Quickmart.",
    content: `
      <p>Quickmart Supermarket has become one of the largest employers in Kenya, with over 150 stores and thousands of employees. If you're looking for a stable career with growth opportunities, Quickmart is the place to be. But how do you stand out among thousands of applicants?</p>
      
      <h2>1. Understand the Quickmart Culture</h2>
      <p>Quickmart values hard work, integrity, and excellent customer service. Before applying, visit a few stores to understand how they operate. This first-hand knowledge will be invaluable during your interview.</p>
      
      <h2>2. Prepare Your Documents</h2>
      <p>Quickmart is strict about documentation. Ensure you have the following ready:</p>
      <ul>
        <li>Valid National ID or Passport</li>
        <li>KRA PIN Certificate</li>
        <li>KCSE Certificate (for most positions)</li>
        <li>Certificate of Good Conduct (highly recommended)</li>
      </ul>
      
      <h2>3. The Application Process</h2>
      <p>The most efficient way to apply is through the official <a href="https://quickmartjobs.site">Quickmart Jobs Portal</a>. Avoid third-party sites that may charge fees; Quickmart recruitment is always free.</p>
      
      <h2>4. Interview Tips</h2>
      <p>If you're called for an interview, dress professionally and arrive early. Be prepared to discuss your experience in customer service and how you handle difficult situations. Show enthusiasm for the brand!</p>
    `,
    author: "Quickmart Careers Team",
    date: "January 18, 2026",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800",
    category: "Career Advice",
    readTime: "5 min read",
    tags: ["Quickmart Jobs", "Interview Tips", "Kenya Careers", "Job Search"]
  },
  {
    id: "quickmart-salary-scales-2026",
    title: "Quickmart Salary Scales 2026: What to Expect for Different Roles",
    excerpt: "Curious about how much Quickmart pays? We break down the salary ranges for cashiers, drivers, store keepers, and more.",
    content: `
      <p>One of the most common questions job seekers ask is about the salary at Quickmart. Known for its reliable payment system (guaranteed on the 5th of every month), Quickmart offers competitive rates in the Kenyan retail sector.</p>
      
      <h2>Current Salary Ranges (Monthly)</h2>
      <table>
        <tr><th>Position</th><th>Estimated Salary (Ksh)</th></tr>
        <tr><td>Cleaners</td><td>18,000 - 22,000</td></tr>
        <tr><td>Cashiers</td><td>21,000 - 26,000</td></tr>
        <tr><td>Sales Attendants</td><td>23,000 - 28,000</td></tr>
        <tr><td>Drivers</td><td>25,000 - 35,000</td></tr>
        <tr><td>Store Keepers</td><td>30,000 - 40,000</td></tr>
        <tr><td>Warehouse Supervisors</td><td>35,000 - 50,000</td></tr>
      </table>
      
      <h2>Benefits Beyond Salary</h2>
      <p>In addition to the basic pay, Quickmart employees enjoy several benefits:</p>
      <ul>
        <li>Medical insurance coverage</li>
        <li>Performance-based bonuses</li>
        <li>Internal promotion opportunities (85% of managers started in entry-level roles)</li>
        <li>Training and mentorship programs</li>
      </ul>
    `,
    author: "HR Insights Kenya",
    date: "January 15, 2026",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
    category: "Salaries",
    readTime: "4 min read",
    tags: ["Quickmart Salary", "Kenya Wages", "Retail Benefits", "Employment Kenya"]
  },
  {
    id: "top-10-retail-skills-kenya",
    title: "Top 10 Skills You Need to Succeed in Kenya's Retail Industry",
    excerpt: "The retail sector in Kenya is booming. Here are the top skills that will make you a top candidate for any supermarket job.",
    content: `
      <p>With the rapid expansion of chains like Quickmart, Carrefour, and Naivas, the demand for skilled retail professionals in Kenya is at an all-time high. Here are the skills you should highlight on your CV.</p>
      
      <h2>1. Customer Service Excellence</h2>
      <p>In retail, the customer is king. Being able to handle inquiries and complaints with a smile is the most important skill you can have.</p>
      
      <h2>2. Numerical Accuracy</h2>
      <p>Especially for cashiers and store keepers, being good with numbers is crucial to avoid losses and inventory errors.</p>
      
      <h2>3. Communication Skills</h2>
      <p>You need to communicate effectively with both customers and your team members to ensure smooth operations.</p>
      
      <h2>4. Adaptability</h2>
      <p>Retail environments are fast-paced. Being able to adapt to different shifts and tasks is highly valued by employers.</p>
    `,
    author: "Career Coach Kenya",
    date: "January 10, 2026",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800",
    category: "Skills Development",
    readTime: "6 min read",
    tags: ["Retail Skills", "CV Tips", "Kenya Jobs", "Professional Growth"]
  }
];
