import React from 'react';
import { ShimmerLayer, Skeleton } from './styles';

export const SkeletonImage = () => {
    return (
        <Skeleton>
            <ShimmerLayer className="shimmer"></ShimmerLayer>
        </Skeleton>
    )
}
