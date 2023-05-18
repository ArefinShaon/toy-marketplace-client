import logo from '../../assets/toyman_d3aab1e4-a273-4b68-a0c8-9b6f6e6282c2_190x.png'

const Footer = () => {  
  return (
    <footer className="footer lg:h-72 p-10 bg-cyan-100 text-base-content">
      <div>
       <img className='w-64' src={logo} alt="" />
        <p>
          ACME Industries Ltd.
          <br />
                  Providing reliable tech since 1992
                  <br />
                  <br />
                 @ Copyright Toyman | Built with Toyman by Team90Degree
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
