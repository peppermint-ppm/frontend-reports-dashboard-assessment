import React from "react";

type Props = {
  fill?: string
  className: string
}

export const HomeIcon: React.FC<Props> = ({ fill, className }) => {
  return (
    <svg className={ className } width="16px" height="17px" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.5 15.3V11.895C9.49948 11.8159 9.48334 11.7378 9.45252 11.665C9.42169 11.5922 9.37679 11.5262 9.32038 11.4708C9.26397 11.4154 9.19718 11.3717 9.12384 11.3422C9.05049 11.3128 8.97204 11.2981 8.893 11.299H7.107C6.94767 11.2982 6.79447 11.3604 6.68078 11.472C6.56709 11.5836 6.50211 11.7357 6.5 11.895V15.3H2.5C2.36877 15.3002 2.23878 15.2746 2.11747 15.2246C1.99615 15.1745 1.8859 15.1011 1.79301 15.0084C1.70013 14.9157 1.62644 14.8056 1.57616 14.6844C1.52588 14.5631 1.5 14.4332 1.5 14.302V7.29698C1.5 6.91598 1.718 6.56798 2.06 6.40098L8.02 1.50098L13.916 6.38998C14.0901 6.46921 14.2377 6.59685 14.3413 6.75767C14.4448 6.91849 14.4999 7.1057 14.5 7.29698V14.302C14.5 14.4331 14.4742 14.563 14.4239 14.6841C14.3737 14.8053 14.3001 14.9153 14.2073 15.008C14.1146 15.1007 14.0044 15.1742 13.8832 15.2243C13.762 15.2744 13.6321 15.3001 13.501 15.3H9.5ZM8 9.09998C8.17072 9.09998 8.33976 9.06635 8.49749 9.00102C8.65521 8.93569 8.79852 8.83993 8.91924 8.71922C9.03996 8.5985 9.13571 8.45519 9.20104 8.29747C9.26637 8.13974 9.3 7.97069 9.3 7.79998C9.3 7.62926 9.26637 7.46021 9.20104 7.30249C9.13571 7.14476 9.03996 7.00145 8.91924 6.88074C8.79852 6.76002 8.65521 6.66426 8.49749 6.59893C8.33976 6.5336 8.17072 6.49998 8 6.49998C7.65522 6.49998 7.32456 6.63694 7.08076 6.88074C6.83696 7.12454 6.7 7.45519 6.7 7.79998C6.7 8.14476 6.83696 8.47542 7.08076 8.71922C7.32456 8.96301 7.65522 9.09998 8 9.09998V9.09998Z" fill={fill}/>
      <path d="M8.05267 1.50471C7.99841 1.49727 7.9432 1.50097 7.89041 1.51559C7.83763 1.5302 7.78838 1.55542 7.74567 1.58971L0.602668 7.37371C0.560702 7.40677 0.525784 7.4479 0.499974 7.49467C0.474164 7.54145 0.457986 7.59292 0.452393 7.64605C0.446801 7.69918 0.451907 7.75289 0.467412 7.80401C0.482917 7.85514 0.508506 7.90264 0.542668 7.94371L1.29267 8.86871C1.43067 9.03871 1.68767 9.06871 1.86067 8.92871L8.05267 3.91371L14.2457 8.92871C14.4187 9.06871 14.6757 9.03871 14.8157 8.86871L15.5637 7.94271C15.5978 7.90164 15.6234 7.85414 15.6389 7.80301C15.6544 7.75189 15.6595 7.69818 15.6539 7.64505C15.6483 7.59192 15.6322 7.54045 15.6064 7.49367C15.5806 7.4469 15.5456 7.40577 15.5037 7.37271L8.36067 1.59071C8.31784 1.55629 8.26842 1.531 8.21545 1.51638C8.16248 1.50176 8.10709 1.49813 8.05267 1.50571V1.50471Z" fill={fill} />
    </svg>
  )
}