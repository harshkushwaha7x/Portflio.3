const Footer = () => {
  return (
    <footer className="bg-card shadow-lg border-t border-border py-6 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-1">Harsh <span className="font-bold">Kushwaha</span></h2>
            <p className="text-sm text-text-secondary">| Full Stack Web Developer | AI & Cloud Enthusiast | Python • Java DSA | Open-Source Contributor |</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-base font-semibold mb-2">Contact</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="mailto:harshkushwaha4151@gmail.com" className="text-text-secondary hover:text-portfolio-blue">harshkushwaha4151@gmail.com</a></li>
                <li><a href="tel:+91 8528815252" className="text-text-secondary hover:text-portfolio-blue">+91 8528815252</a></li>
                <li className="text-text-secondary">Gurugram, Haryana, India</li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-2">Links</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="https://www.linkedin.com/in/harsh-kushwaha-7x" className="text-text-secondary hover:text-portfolio-blue">LinkedIn</a></li>
                <li><a href="https://github.com/harshkushwaha7x" className="text-text-secondary hover:text-portfolio-blue">GitHub</a></li>
                <li><a href="https://leetcode.com/u/harsh_kushwaha_7x/" className="text-text-secondary hover:text-portfolio-blue">LeetCode</a></li>
                <li><a href="https://www.geeksforgeeks.org/user/harshkushwaha7x/" className="text-text-secondary hover:text-portfolio-blue">GeeksforGeeks</a></li>
                <li><a href="https://www.hackerrank.com/profile/harshkushwaha7x" className="text-text-secondary hover:text-portfolio-blue">HackerRank</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-5 border-t border-border">
          <p className="text-xs text-text-secondary">© 2025 Harsh Kushwaha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
