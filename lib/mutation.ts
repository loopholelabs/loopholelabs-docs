import {useEffect} from 'react';

type AttributeCallback = (value: string | null) => void;
export function useAttributeObserver(elementId: string, attributeName: string, callback: AttributeCallback): void {
    useEffect(() => {
        const targetElement = document.getElementById(elementId);

        if (!targetElement) {
            console.warn(`Element with id ${elementId} not found`);
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