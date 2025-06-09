import React from "react";
import PolicyBox from "./atom/PolicyBox";
import { Truck, Undo2, Wallet, Gift, Headset } from "lucide-react";

const policy = [
  {
    icon: <Truck strokeWidth={1.5}  size={55} />,
    title: "Free Shipping",
    desc: "For all Orders Over $100",
  },
  {
    icon: <Undo2  strokeWidth={1.5} size={55}/>,
    title: "15 Days Returns",
    desc: "For an exchnage product",
  },
  {
    icon: <Wallet strokeWidth={1.5} size={55} />,
    title: " Secured Payments",
    desc: "Payment Cards Accepted",
  },
  {
    icon: <Gift strokeWidth={1.5} size={55} />,
    title: "Special Gift",
    desc: "For our First Product Order",
  },
  {
    icon: <Headset strokeWidth={1.5} size={55} />,
    title: "Support 24/7",
    desc: "Cotnact us anytime",
  },
];

const PolicySection = () => {
  return (
    <div className="py-[50px] px-[15vw] flex items-center justify-between">
      {policy.map((policy, index) => (
        <PolicyBox
          key={index}
          icon={policy.icon}
          title={policy.title}
          desc={policy.desc}
        />
      ))}
    </div>
  );
};

export default PolicySection;
