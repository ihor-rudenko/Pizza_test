import { ReactNode } from "react"

type CardsWrapperProps = { 
    children?: ReactNode; 
    className?: string;
}

export const CardsWrapper = (props: CardsWrapperProps) => {
        const { children } = props;

      return (
        <div className="cards__wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {children}
        </div>
    )
    

}
  

   
   