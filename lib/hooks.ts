import {useEffect, useState} from 'react';

type AttributeCallback = (value: string | null) => void;

export function useAttributeObserver(elementId: string, attributeName: string, callback: AttributeCallback): void {
    useEffect(() => {
        const targetElement = document.getElementById(elementId);
        if (!targetElement) {
            console.warn(`element with id ${elementId} not found`);
            return;
        }
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (
                    mutation.type === 'attributes' &&
                    mutation.attributeName === attributeName
                ) {
                    const newValue = targetElement.getAttribute(attributeName);
                    callback(newValue);
                }
            });
        });
        observer.observe(targetElement, {
            attributes: true,
            attributeFilter: [attributeName]
        });
        return () => observer.disconnect();
    }, [elementId, attributeName, callback]);
}

export function useScrollPosition(elementId: string): number {
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        let updatePosition;
        const targetElement = document.getElementById(elementId);
        if (elementId == '' || !targetElement) {
            updatePosition = () => {
                setScrollPosition(window.scrollY);
            }
            window.addEventListener('scroll', updatePosition);
        } else {
            updatePosition = () => {
                setScrollPosition(targetElement.scrollTop);
            }
            targetElement.addEventListener('scroll', updatePosition);
        }
        updatePosition();
        return () => {
            if (!targetElement) {
                window.removeEventListener('scroll', updatePosition)
            } else {
                targetElement.removeEventListener('scroll', updatePosition)
            }
        }
    }, [elementId])
    return scrollPosition
}