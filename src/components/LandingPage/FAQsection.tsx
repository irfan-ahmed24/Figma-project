
import QuestionCard from "../Card/QuestionCard";
function FAQsection() {
  const FAQ=[
    {
      question: "What is a chatbot and how does it work?",
      answer: "A chatbot is an automated program that communicates with users through text or voice. It uses predefined rules or AI to understand questions and provide relevant responses. Modern chatbots can learn from user interactions and improve over time."
    },
    {
      question: "How can I integrate the chat widget into my website?",
      answer: "Integrating the chat widget is simple. Just copy the provided JavaScript code snippet and paste it into the HTML of your website, preferably before the closing </body> tag. Customize the widget's appearance and behavior through the dashboard to match your brand."
    }
  ];
  return (
    <div className="bg-color">
      <div className="container px-2 px-md-5">
        <div className="py-5">
          <div className="mx-0 mx-md-5 text-center">
            <h2 className="fw-bold mb-3 h2-tag">
              Frequently Asked
              <span className="text-primary"> Questions</span>
            </h2>
            <p className="text-color p2-tag">
              Quickly customize and install an AI-powered chat widget on your
              website. Engage visitors, answer questions instantly, and boost
              conversions — all without writing a single line of code.
            </p>
          </div>

          <div className="mx-0 mx-md-5 mt-4">

            {FAQ.map((item, index) => (
              <QuestionCard key={index} onData={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default FAQsection;
