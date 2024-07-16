import React, { useEffect, useRef } from 'react';
import {  FloatingArrowIcon } from './styles';

const FloatingArrow = () => {
    const arrowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const sidebar = document.querySelector('.sidebar');
            if (sidebar) {
                const maxScrollTop = sidebar.scrollHeight - sidebar.clientHeight;
                if (sidebar.scrollTop < maxScrollTop) {
                      if (arrowRef.current) {
                        arrowRef.current.style.display = 'block';
                      }
                } else {
                    if (arrowRef.current) {
                      arrowRef.current.style.display = 'none';
                    }
                }
            }
        };

        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            sidebar.addEventListener('scroll', handleScroll);
            handleScroll(); // Initialize state
            return () => {
                sidebar.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    return (
        <FloatingArrowIcon ref={arrowRef} >
            ↓
        </FloatingArrowIcon>
    );
};

export default FloatingArrow;