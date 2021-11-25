import { ArrowsExpandIcon, CashIcon, LocationMarkerIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import React from "react";

interface OfferCardTypes {
  className?: string,
  offer: any,
  imageLink: string
}

const cardClass = classNames(
  'w-full',
  'flex',
  'my-2',
  'rounded-md',
  'shadow-md'
);

const imageClass = classNames(
  'h-auto',
  'w-auto',
  'max-w-xxs',
  'rounded-l-md'
);

const iconClass = classNames(
  'h-6 w-6',
  'inline',
  'text-primary',
  'mr-1'
);

const rowClass = classNames(
  'flex items-center'
);

const OfferCard: React.FC<OfferCardTypes> = ({
  className,
  offer,
  imageLink
}) => {
  return (
    <div className={className}>
      <div className={cardClass}>
        <div className='h-50'>
          <img src={imageLink} alt='offer_image' className={imageClass}/>
        </div>
        <div className='flex-grow p-3 flex flex-col justify-evenly'>
          <div className='font-black text-lg'>{offer.title}</div>
          <div className={rowClass}><LocationMarkerIcon className={iconClass}/> {offer.address}</div>
          <div className={rowClass}><CashIcon className={iconClass} /> {offer.price}{offer.currency}</div>
          <div className={rowClass}><ArrowsExpandIcon className={iconClass} /> {offer.area}m<sup>2</sup></div>
        </div>
      </div>
    </div>
  );
}

export default OfferCard;