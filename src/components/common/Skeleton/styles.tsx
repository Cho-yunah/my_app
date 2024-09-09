import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const Skeleton = styled.div`
    width: 200px;
    height: 360px;
    background-color: #ddd;
    position: relative;
    overflow: hidden;

    &.shimmer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0) 100%);
        transform: translateX(-100%);
        animation: shimmer 2s infinite;
    }
`;

// Shimmer 효과를 위한 애니메이션 정의
const shimmer = keyframes`
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
`;

// Shimmer 애니메이션을 적용할 레이어 스타일
export const ShimmerLayer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.6) 50%,
        rgba(255, 255, 255, 0) 100%
    );
    animation: ${shimmer} 2s infinite;
`;

