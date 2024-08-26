const reviews =[ 
  {
    writer: "Jessica Miller",
    content:
      "Mutecx did an incredible job on our website redesign. Their attention to detail and creativity made our site stand out. The whole process was smooth, and they were always open to feedback. Highly recommend!",
 },
  {
    writer: "Michael Harris",
    content:
      "The team at Mutecx built our Shopify store from the ground up, and it’s been a game changer for our business. Sales have improved significantly, and our customers love the new design.",
  },
  {
    writer: "Sarah Thompson",
    content:
      "We hired Mutecx for a complete branding overhaul, and we couldn’t be happier with the results. They took the time to understand our vision and delivered a brand identity that truly reflects who we are.",
  },
  {
    writer: "Daniel Robinson",
    content:
      "Mutecx’s digital marketing strategies helped us reach a broader audience and grow our online presence. The team is knowledgeable and always available to answer questions.",
  },
  {
    writer: "Laura Evans",
    content:
      "I was impressed with how Mutecx handled our SaaS product launch. Their technical expertise and project management were key to getting our product to market on time and within budget.",
  },
  {
    writer: "Andrew Clark",
    content:
      "The graphic design work Mutecx did for our marketing campaign was outstanding. The visuals were creative and aligned perfectly with our brand message. We received great feedback from our audience.",
  },
  {
    writer: "Megan Walker",
    content:
      "Mutecx provided excellent service when we needed to optimize our website for SEO. The improvements they made have significantly boosted our organic traffic. We’re seeing more qualified leads coming through as a result.",
  },
  {
    writer: "John Wright",
    content:
      "We partnered with Mutecx to develop a custom API for our e-commerce platform. The process was seamless, and the final product has streamlined our operations. The team’s expertise is evident in their work.",
  },
{
    writer: "Rachel Green",
    content:
      "Mutecx was instrumental in helping us redesign our landing pages. Their approach to UX/UI was innovative, and the new pages have a much higher conversion rate. We’re thrilled with the results.",
  },
{
    writer: "Kevin Lewis",
    content:
      "Working with Mutecx on our Shopify store management has been a great experience. They handle everything from updates to troubleshooting, allowing us to focus on growing our business.",
  },]
;

export const ReviewCard = () => {
  return (
     <div className=''>
        {reviews.map(({writer, content}) => (
           <div className='bg-slate-100 rounded-lg'>
              <div>
                 <h2>{writer}</h2>
                  <p>{content}</p>
              </div>
           </div>
        ))}
    </div>
  )
}
