// import React from "react";

// export default function Learn() {
//   return (
//     <section className="max-w-3xl mx-auto px-4 py-10 space-y-6">
//       <h2 className="text-2xl md:text-4xl font-black">What is Sentiment Analysis?</h2>
//       <div className="card space-y-3">
//         <p>
//           Sentiment Analysis is a simple trick in Artificial Intelligence that guesses if a sentence
//           sounds <b>positive</b>, <b>negative</b>, or <b>neutral</b>.
//         </p>
//         <ul className="list-disc pl-6">
//           <li>“I love ice cream!” → Positive 😊</li>
//           <li>“This homework is so hard.” → Negative 😞</li>
//           <li>“I am going to school.” → Neutral 🙂</li>
//         </ul>
//         <p>
//           Apps use this to understand feelings in reviews and comments.
//         </p>
//       </div>

//       <div className="card space-y-3">
//         <h3 className="text-xl font-bold">Mini Story</h3>
//         <p>
//           Maya found a new park. She said, “This park is awesome and fun!”<br/>
//           Later, her kite broke and she said, “Oh no, I feel sad.”<br/>
//           Finally, she looked at the blue sky and smiled. “The sky is blue.”<br/>
//           Can you spot which sentences are positive, negative, and neutral?
//         </p>
//       </div>
//     </section>
//   )
// }



import React from "react";

export default function Learn() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      {/* Intro */}
      <h2 className="text-2xl md:text-4xl font-black">What is Sentiment Analysis?</h2>
      <div className="card space-y-3">
        <p>
          Sentiment Analysis is a technique in <b>Artificial Intelligence (AI)</b> that guesses if a
          sentence sounds <b>positive</b>, <b>negative</b>, or <b>neutral</b>.
        </p>
        <ul className="list-disc pl-6">
          <li>“I love ice cream!” → Positive 😊</li>
          <li>“This homework is so hard.” → Negative 😞</li>
          <li>“I am going to school.” → Neutral 🙂</li>
        </ul>
        <p>
          Many apps use this to understand feelings in <b>reviews, feedback, social media posts, and
          even chats</b>.
        </p>
      </div>

      {/* Mini Story */}
      <div className="card space-y-3">
        <h3 className="text-xl font-bold">Mini Story</h3>
        <p>
          Maya found a new park. She said, “This park is awesome and fun!” <br />
          Later, her kite broke and she said, “Oh no, I feel sad.” <br />
          Finally, she looked at the blue sky and smiled. “The sky is blue.” <br />
          <b>Can you spot which sentences are positive, negative, and neutral?</b>
        </p>
      </div>

      {/* Real-Life Examples */}
      <div className="card space-y-3">
        <h3 className="text-xl font-bold">Where is Sentiment Analysis Used?</h3>
        <ul className="list-disc pl-6">
          <li>📱 Social Media: Detect if people are happy or upset about a new product.</li>
          <li>🛒 Shopping Sites: Understand customer reviews on items.</li>
          <li>🎬 Movies & Games: Check if fans enjoyed or disliked them.</li>
          <li>💼 Companies: See how employees feel from surveys.</li>
          <li>🤖 Chatbots: Reply politely if someone is angry or sad.</li>
        </ul>
      </div>

      {/* Quick Activity */}
      <div className="card space-y-3">
        <h3 className="text-xl font-bold">Try It Yourself!</h3>
        <p>Guess the sentiment of these sentences:</p>
        <ul className="list-disc pl-6">
          <li>“I can’t wait for my birthday party!”</li>
          <li>“This food tastes terrible.”</li>
          <li>“It’s raining outside.”</li>
          <li>“I am proud of my hard work.”</li>
        </ul>
        <p className="italic">👉 Can you tell which are positive, negative, or neutral?</p>
      </div>

      {/* Fun Fact */}
      <div className="card space-y-3">
        <h3 className="text-xl font-bold">Fun Fact 🎉</h3>
        <p>
          Did you know? Sentiment analysis is also used in <b>sports</b> to see how fans react to
          matches, and even in <b>politics</b> to understand what people think about leaders!
        </p>
      </div>
    </section>
  );
}
