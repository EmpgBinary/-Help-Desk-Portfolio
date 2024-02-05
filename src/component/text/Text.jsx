import React from "react";
import "./text.css";
import SignUp from "../signUp/Signup";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";


const Text = () => {
  return (
    <div>
      <Navbar />
      <main>
        
        <p>
          Website Designs, Graphic Designs, UI/UX Designs, Programming Tutorials
        </p>
        
        <SignUp />

        <h2 id="updates"> Company Updates</h2>

        <div className="card">
          <h3>Take Advantage of this amazing Oppurtunity..</h3>
          <p>
            We sit and think of how and where we can help. Well, there is this
            saying that you can only give what you have! So we will give what we
            have to the fullest. Are you in need of a responsive website? Do you
            need more sales in your business? Striving for more visibilty
            online? We at Empg Binary are giving out slots to Individuals,
            Private and Public Companies to own a website for free. Dont miss
            this Oppurtunity to up your game in the online space! It is totally
            free. PLUG IN NOW!!
          </p>
        </div>
        <div className="card">
          <h3>What a Website can do for your Business/Company!</h3>
          <p>
            A website can serve various purposes for a company, playing a
            crucial role in its online presence and overall business strategy.
            Here are some key things a website can do for a company:
          </p>
          <p>
            (1) Online Presence: Establish an online identity and presence,
            making it easier for potential customers to find and learn about the
            company.
          </p>
          <p>
            (2) Information Hub: Provide essential information about the
            company, its products, services, mission, vision, and values.
          </p>
          <p>
            (3) Marketing and Branding: Act as a digital marketing tool to
            promote products or services and enhance the Companies brand image.
          </p>
          <p>
            (4) E-commerce: Enable online sales of products or services,
            expanding the Companies reach to a global audience.
          </p>
          <p>
            (5) SEO (Search Engine Optimization): Improve search engine
            rankings, making it easier for potential customers to discover the
            company through search engines like Google.
          </p>
        </div>
        <Link to="/contact">
          <button>Contact Us</button>
        </Link>
      </main>
    </div>
  );
};

export default Text;
