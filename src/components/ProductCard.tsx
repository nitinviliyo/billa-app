import { Product } from "@/interfaces/Product";
import React from "react";
import styled from "styled-components";

interface ProductCardProps {
  product: Product;
}

const CardContainer = styled.legend`
  background-color: white;
  border-radius: 4px;
  border: 1px solid black;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProviderImage = styled.img`
  max-width: 100%;
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
  float: right;
`;

const Footer = styled.footer`
  background-color: #f5f5f5;
  height: 130px;
  padding: 12px;
`;

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <CardContainer>
      <div></div>
      <ProviderImage src={product.provider_image} alt="Provider Logo" />
      <PlanName>{product.plan_name}</PlanName>
      <PlanDescription>{product.provider_name}</PlanDescription>

      <div>
        Estimated Cost
        <div>
          <span>{product.expected_annually_bill_amount}/Yr</span>
          <span>{product.expected_monthly_bill_amount}/Month</span>
        </div>
      </div>

      <Footer>
        <div></div>
        <div>
          <RoundButton>Connect Online Today</RoundButton>{" "}
        </div>
      </Footer>
    </CardContainer>
  );
};

export default ProductCard;
