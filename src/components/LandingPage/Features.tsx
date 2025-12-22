import { useState } from 'react';

function Features() {
  // 1. State to track which item is open (null means all closed, 0 is the first one)
  const [activeIndex, setActiveIndex] = useState(0);

  const featureData = [
    {
      title: "Drag & Drop Editing",
      desc: "Add a code snippet to your website, and you’re ready to automate your customer service with AI! Easily connect with many web and ecommerce platforms."
    },
    {
      title: "Unlimited Creativity",
      desc: "Unleash your brand's potential with flexible design tools that allow you to customize every aspect of your AI chatbot's personality and appearance."
    },
    {
      title: "Responsive Design",
      desc: "Our elements look great on any screen size. Whether your customers are on mobile, tablet, or desktop, the experience remains seamless."
    },
    {
      title: "Dynamic Elements",
      desc: "Use real-time data to power your conversations. From product recommendations to live order tracking, keep your users engaged dynamically."
    }
  ];

  return (
    <div className="bg-color">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 mb-4">
            {featureData.map((item, index) => (
              <div 
                key={index} 
                className={`feature-item px-2 mb-4 border-start border-2 ${activeIndex === index ? 'border-primary' : 'border-secondary'}`}
                style={{ cursor: 'pointer' }}
                onClick={() => setActiveIndex(index)}
              >
                <h4 className={`h4-tag lh-sm ${activeIndex === index ? 'text-primary' : 'text-color'}`}>
                  {item.title}
                </h4>
                
                {/* 2. Only show paragraph if this index is active */}
                <div className={`overflow-hidden transition-all ${activeIndex === index ? 'show-content' : 'hide-content'}`}>
                  <p className="lh-sm text-start p2-tag mt-3">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="col-12 col-md-6 mb-4 p-4">
            <img
              className="img-fluid"
              src="./contentImages/Features.png"
              alt="Features"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;