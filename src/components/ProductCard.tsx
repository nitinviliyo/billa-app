import { Product } from "@/interfaces/Product";
import { ReactNode } from "react";
import styled from "styled-components";
import Panel from "./Panel";
import { FaLightbulb, FaSolarPanel } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";

interface ProductCardProps {
  product: Product;
}

const buttonSpanStyle = {};

const CardContainer = styled.div`
  background-color: white;
  border-radius: 4px;
  border: 1px solid black;
  margin-top: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const ProviderImage = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 10px;
`;

const PlanName = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const PlanDescription = styled.p`
  font-size: 14px;
  color: #666;
`;

const RoundButton = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #1b2a74;
  color: #ffffff;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

const Footer = styled.footer`
  background-color: #f5f5f5;
  padding: 10px 20px;
  border-top: 1px solid #ddd;
`;

interface SpanButtonProps {
  primary?: boolean;
  secondary?: boolean;
  default?: boolean;
  warning?: boolean;
}

const SpanButton = styled.span<SpanButtonProps>`
  background-color: ${({ primary, secondary, default: isDefault, warning }) =>
    primary
      ? "#007bff"
      : secondary
      ? "#28a745"
      : warning
      ? "#ffc107"
      : isDefault
      ? "#f8f9fa"
      : "#007bff"};
  color: ${({ primary, secondary, default: isDefault, warning }) =>
    primary || secondary || warning ? "#fff" : "#212529"};
  border-radius: 10px;
  padding: 7px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: 20px;
`;

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <CardContainer>
      <div style={{ display: "flex", position: "absolute", top: -16 }}>
        <SpanButton default>
          <FaLightbulb />
          Electricity
        </SpanButton>
        <SpanButton default>
          {" "}
          <FaSolarPanel /> Solar
        </SpanButton>
      </div>

      <div style={{ padding: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <ProviderImage src={product.provider_image} alt="Provider Logo" />
            <a style={{ textDecoration: "none", color: "#68bef2" }} href="">
              View Details
            </a>
            <a style={{ textDecoration: "none", color: "#68bef2" }} href="">
              Basic Plan Information Document
            </a>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <SpanButton default>
              29% Less than the current refrence price
            </SpanButton>
            {[
              " 12 Month Energy Plan Period",
              "Ongoing Market Contract",
              " No Exit Fees",
              "$100 credit (including GST ) prorated daily",
            ].map((el, index) => (
              <span key={index} style={{ textAlign: "center" }}>
                <MdDoneOutline color="#24337a" />
                {el}
              </span>
            ))}
            <SpanButton>Standard Feed in Tariff: Sc</SpanButton>
          </div>
          <div>
            <Panel title="Estimated Cost">
              <span style={{ display: "block" }}>
                {product.expected_annually_bill_amount}/Yr
              </span>
              <span style={{ display: "block" }}>
                {product.expected_monthly_bill_amount}/Month
              </span>
            </Panel>
          </div>
        </div>
        <div>
          This Origin Advantage Variable - NSW offer is currently 29 % less than
          the Reference Price. This includes a $100 credit including GST
          prorated daily and applied to your bills over your 12 months plan. If
          you end your plan early, any unpaid credit is forfeited. For an
          average household using 3900 kWh/year, the estimated annual cost of
          this electricity plan is $987 (incl. GST) in the Ausgrid network with
          a single rate tariff.
        </div>
      </div>

      <Footer>
        <div>
          {[
            "10 business days cooling off period",
            "Secure signup in 5 mins",
            "Save time and effort",
          ].map((el, index) => (
            <span key={index} style={{ textAlign: "center" }}>
              <MdDoneOutline color="#24337a" />
              {el}
            </span>
          ))}
          <p>
            The estimated cost includes any applicable welcome credits, bonuses,
            and conditional discounts (if applicable) which apply within the
            first 12 months of the plan.
          </p>
        </div>
        <div>
          <RoundButton>Connect Online Today</RoundButton>
        </div>
      </Footer>
    </CardContainer>
  );
};

export default ProductCard;
