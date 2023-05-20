import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from "react-accessible-accordion";
  import { FiChevronDown } from "react-icons/fi";
  import img1 from "../../assets/toys_party.png";
  import AOS from 'aos';
  import { useEffect } from "react";
  import 'aos/dist/aos.css';
  
  const AccordionComponent = () => {
    useEffect(() => {
      AOS.init();
    }, []);
  
    return (
      <div>
        <h2 className="text-center text-2xl lg:text-4xl m-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-cyan-400 mt-4">
          Find your answer from here
        </p>
        <div className="flex flex-col md:flex-row-reverse mt-8 justify-center px-8 gap-8 items-center">
          <div
            className="md:order-1"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <img src={img1} alt="" />
          </div>
          <Accordion
            className="accordion border border-cyan-500 p-8 bg-cyan-50 rounded w-full lg:w-1/2"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <AccordionItem className="accordion-item">
              <AccordionItemHeading className="accordion-item-heading m-2 rounded p-3 border border-cyan-500">
                <AccordionItemButton className="accordion-item-button flex items-center justify-between">
                  <span className="accordion-item-button-text">
                    What is the age range of toys available in the store?
                  </span>
                  <FiChevronDown className="accordion-item-icon" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="accordion-item-panel m-2 rounded p-3 border border-cyan-500">
                <p>
                  Finding an age-appropriate toy means finding a toy that is a
                  good match for their age, interests, and the skills they are
                  learning. It is also important for safety when children are
                  young, so they are not exposed to toys that are too small and
                  could result in a choking hazard.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordion-item">
              <AccordionItemHeading className="accordion-item-heading rounded p-3 m-2 border border-cyan-500">
                <AccordionItemButton className="accordion-item-button flex items-center justify-between">
                  <span className="accordion-item-button-text">
                    Do you offer a warranty or return policy for your products?
                  </span>
                  <FiChevronDown className="accordion-item-icon" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="accordion-item-panel m-2 p-3 rounded border border-cyan-500">
                <p>
                  If things do not work as expected, a warranty may allow the
                  purchase to be returned, replaced, or repaired. A products
                  warranty acts as a guarantee that it will perform. However, not
                  all warranties are equal. A warranty might cover a product for a
                  lifetime or just a matter of days.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordion-item">
              <AccordionItemHeading className="accordion-item-heading m-2 p-3 rounded border border-cyan-500">
                <AccordionItemButton className="accordion-item-button flex items-center justify-between">
                  <span className="accordion-item-button-text">
                    Can I order toys online?
                  </span>
                  <FiChevronDown className="accordion-item-icon" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="accordion-item-panel m-2 p-3 rounded border border-cyan-500">
                <p>
                  Yes, of course! You can easily order toys online through our
                  website. Simply browse the available options, select the toys
                  you want, and proceed to the checkout process.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    );
  };
  
  export default AccordionComponent;
  