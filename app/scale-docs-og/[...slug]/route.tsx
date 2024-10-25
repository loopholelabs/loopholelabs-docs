import { readFileSync } from 'node:fs';

import {GenerateOGImage} from '@/components/OG/OG';
import {scaleMetadataImage} from '@/lib/metadata';

const font = readFileSync('./public/fonts/Geist-Regular.ttf');
const fontBold = readFileSync('./public/fonts/Geist-Bold.ttf');

const scaleIconDataURL = 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjYuNDQgMTA3LjEyIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiB1cmwoI2xpbmVhci1ncmFkaWVudCk7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogIzUzNDZlMTsKICAgICAgfQoKICAgICAgLmNscy0zIHsKICAgICAgICBmaWxsOiAjNzkzOGU0OwogICAgICB9CgogICAgICAuY2xzLTQgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgIH0KCiAgICAgIC5jbHMtNCwgLmNscy01IHsKICAgICAgICBvcGFjaXR5OiAuNTsKICAgICAgfQoKICAgICAgLmNscy01IHsKICAgICAgICBmaWxsOiAjMDIwMjM2OwogICAgICB9CiAgICA8L3N0eWxlPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHgxPSI1LjkyIiB5MT0iMjYuMjYiIHgyPSI2MC41NCIgeTI9IjgwLjg3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzkzMzNlYSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM0ZjQ2ZTUiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxnIGlkPSJBbmltYXRpb25fTW92ZV9MYXllcl9Mb3dlciIgZGF0YS1uYW1lPSJBbmltYXRpb24gTW92ZSBMYXllciBMb3dlciI+CiAgICA8Zz4KICAgICAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJtNDIuMjMsNzYuNDVsOC44NSw4Ljg1Yy0uOTQtLjk0LTIuNDgtLjk0LTMuNDIsMGwtMy4wNCwzLjA0Yy0uOTQuOTQtLjk0LDIuNDgsMCwzLjQybC04Ljg1LTguODVjLjk0Ljk0LDIuNDguOTQsMy40MiwwbDMuMDQtMy4wNGMuOTQtLjk0Ljk0LTIuNDgsMC0zLjQyWiIvPgogICAgICA8cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Im00Mi4yMyw3Ni40NWw4Ljg1LDguODVjLS45NC0uOTQtMi40OC0uOTQtMy40MiwwbC0zLjA0LDMuMDRjLS45NC45NC0uOTQsMi40OCwwLDMuNDJsLTguODUtOC44NWMuOTQuOTQsMi40OC45NCwzLjQyLDBsMy4wNC0zLjA0Yy45NC0uOTQuOTQtMi40OCwwLTMuNDJaIi8+CiAgICA8L2c+CiAgPC9nPgogIDxnIGlkPSJBbmltYXRpb25fTW92ZV9MYXllcl9VcHBlciIgZGF0YS1uYW1lPSJBbmltYXRpb24gTW92ZSBMYXllciBVcHBlciI+CiAgICA8Zz4KICAgICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJtMjEuODIsMTUuMzZsOC44NSw4Ljg1Yy0uOTQtLjk0LTIuNDgtLjk0LTMuNDIsMGwtMy4wNCwzLjA0Yy0uOTQuOTQtLjk0LDIuNDgsMCwzLjQybC04Ljg1LTguODVjLjk0Ljk0LDIuNDguOTQsMy40MiwwbDMuMDQtMy4wNGMuOTQtLjk0Ljk0LTIuNDgsMC0zLjQyWiIvPgogICAgICA8cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Im0yMS44MiwxNS4zNmw4Ljg1LDguODVjLS45NC0uOTQtMi40OC0uOTQtMy40MiwwbC0zLjA0LDMuMDRjLS45NC45NC0uOTQsMi40OCwwLDMuNDJsLTguODUtOC44NWMuOTQuOTQsMi40OC45NCwzLjQyLDBsMy4wNC0zLjA0Yy45NC0uOTQuOTQtMi40OCwwLTMuNDJaIi8+CiAgICA8L2c+CiAgPC9nPgogIDxnIGlkPSJBbmltYXRpb25fQmFzZV9MYXllciIgZGF0YS1uYW1lPSJBbmltYXRpb24gQmFzZSBMYXllciI+CiAgICA8Zz4KICAgICAgPHBhdGggY2xhc3M9ImNscy00IiBkPSJtMTUuMTYsNDQuNzJsLS4xMy4xM3MuMDQtLjA1LjA2LS4wNy4wNC0uMDQuMDctLjA2WiIvPgogICAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im02NS43Myw3NS42OGwtMTAuNDQsMTAuNDRjLS45NS45NS0yLjQ5Ljk1LTMuNDMsMGwtMTAuNDUtMTAuNDRjLS45NS0uOTUtLjk1LTIuNDksMC0zLjQzbDEuMTEtMS4xMWMuNjQtLjk1LjU1LTIuMjUtLjI5LTMuMDhsLTMuMDUtMy4wNWMtLjg0LS44NC0yLjE2LS45My0zLjEtLjI3bC0xLjA5LDEuMDljLS45NS45NS0yLjQ5Ljk1LTMuNDMsMGwtMTAuNDQtMTAuNDRjLS4xNi0uMTYtLjI5LS4zNC0uNDEtLjUzLDAtLjAxLS4wMi0uMDQtLjAzLS4wNi0uNjItLjk0LS41LTIuMjEuMzItMy4wM2wxLjExLTEuMTFjLjY0LS45NS41NS0yLjI1LS4yOS0zLjA4bC0zLjA1LTMuMDVjLS44NC0uODQtMi4xNi0uOTMtMy4xLS4yN2wtMS4wOSwxLjA5Yy0uOTUuOTUtMi40OS45NS0zLjQzLDBMLjcxLDM0LjljLS45NS0uOTUtLjk1LTIuNDksMC0zLjQzbDEwLjQ0LTEwLjQ0Yy45NS0uOTUsMi40OC0uOTUsMy40MywwbDEwLjQ0LDEwLjQ0Yy45NS45NS45NSwyLjQ5LDAsMy40M2wtMS4wOSwxLjA5Yy0uNjYuOTUtLjU3LDIuMjYuMjcsMy4xbDMuMDUsMy4wNWMuODQuODQsMi4xNi45MywzLjEuMjdsMS4wOS0xLjA5Yy45NS0uOTUsMi40OC0uOTUsMy40MywwbDEwLjQ0LDEwLjQ0Yy4xOC4xOC4zMi4zNi40Mi41Ny4wMS4wMi4wMi4wNC4wMy4wNS41OS45NC40OCwyLjE5LS4zNCwzbC0xLjA5LDEuMDljLS42Ni45NS0uNTcsMi4yNi4yNywzLjFsMy4wNSwzLjA1Yy44NC44NCwyLjE2LjkzLDMuMS4yN2wxLjA5LTEuMDljLjk1LS45NSwyLjQ4LS45NSwzLjQzLDBsMTAuNDQsMTAuNDRjLjk1Ljk1Ljk1LDIuNDksMCwzLjQzWm0wLTQ0LjIzbC0xMC40NC0xMC40NGMtLjk1LS45NS0yLjQ5LS45NS0zLjQzLDBsLTEuMDksMS4wOWMtLjk1LjY2LTIuMjYuNTctMy4xLS4yN2wtMy4wNS0zLjA1Yy0uODQtLjg0LS45My0yLjE2LS4yNy0zLjFsMS4wOS0xLjA5Yy45NS0uOTUuOTUtMi40OSwwLTMuNDNMMzQuOTkuNzFjLS45NS0uOTUtMi40OS0uOTUtMy40MywwbC0xMC40NCwxMC40NGMtLjk1Ljk1LS45NSwyLjQ5LDAsMy40M2wxMC40NCwxMC40NGMuOTUuOTUsMi40OC45NSwzLjQzLDBsMS4wOS0xLjA5Yy45NS0uNjYsMi4yNi0uNTcsMy4xLjI3bDMuMDUsMy4wNWMuODMuODMuOTMsMi4xNC4yOSwzLjA4bC0xLjExLDEuMTFjLS45NS45NS0uOTUsMi40OSwwLDMuNDNsMTAuNDUsMTAuNDRjLjk1Ljk1LDIuNDguOTUsMy40MywwbDEwLjQ0LTEwLjQ0Yy45NS0uOTUuOTUtMi40OSwwLTMuNDNabS0yMC40LDYxLjA5bC0xMC40NC0xMC40NGMtLjk1LS45NS0yLjQ5LS45NS0zLjQzLDBsLTEuMDksMS4wOWMtLjk1LjY2LTIuMjYuNTctMy4xLS4yN2wtMy4wNS0zLjA1Yy0uODQtLjg0LS45My0yLjE2LS4yNy0zLjFsMS4wOS0xLjA5Yy45NS0uOTUuOTUtMi40OSwwLTMuNDNsLTEwLjQ0LTEwLjQ0Yy0uOTUtLjk1LTIuNDktLjk1LTMuNDMsMEwuNzIsNzIuMjRjLS45NS45NS0uOTUsMi40OSwwLDMuNDNsMTAuNDQsMTAuNDRjLjk1Ljk1LDIuNDguOTUsMy40MywwbDEuMDktMS4wOWMuOTUtLjY2LDIuMjYtLjU3LDMuMS4yN2wzLjA1LDMuMDVjLjgzLjgzLjkzLDIuMTQuMjksMy4wOGwtMS4xMSwxLjExYy0uOTUuOTUtLjk1LDIuNDksMCwzLjQzbDEwLjQ1LDEwLjQ0Yy45NS45NSwyLjQ4Ljk1LDMuNDMsMGwxMC40NC0xMC40NGMuOTUtLjk1Ljk1LTIuNDksMC0zLjQzWiIvPgogICAgICA8cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Im01MS4xLDIxLjgybC04Ljg3LDguODdjLjk1LS45NS45NS0yLjQ5LDAtMy40M2wtMy4wNS0zLjA1Yy0uOTUtLjk1LTIuNDktLjk1LTMuNDMsMGw4Ljg3LTguODdjLS45NS45NS0uOTUsMi40OSwwLDMuNDNsMy4wNSwzLjA1Yy45NS45NSwyLjQ5Ljk1LDMuNDMsMFoiLz4KICAgICAgPHBhdGggY2xhc3M9ImNscy01IiBkPSJtMzAuNjksNDIuMTNsLTguODcsOC44N2MuOTUtLjk1Ljk1LTIuNDksMC0zLjQzbC0zLjA1LTMuMDVjLS45NS0uOTUtMi40OS0uOTUtMy40MywwbDguODctOC44N2MtLjk1Ljk1LS45NSwyLjQ5LDAsMy40M2wzLjA1LDMuMDVjLjk1Ljk1LDIuNDkuOTUsMy40MywwWiIvPgogICAgICA8cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Im01MS4xLDYyLjYybC04Ljg3LDguODdjLjk1LS45NS45NS0yLjQ5LDAtMy40M2wtMy4wNS0zLjA1Yy0uOTUtLjk1LTIuNDktLjk1LTMuNDMsMGw4Ljg3LTguODdjLS45NS45NS0uOTUsMi40OSwwLDMuNDNsMy4wNSwzLjA1Yy45NS45NSwyLjQ5Ljk1LDMuNDMsMFoiLz4KICAgICAgPHBhdGggY2xhc3M9ImNscy01IiBkPSJtMzAuNjksODIuOTFsLTguODcsOC44N2MuOTUtLjk1Ljk1LTIuNDksMC0zLjQzbC0zLjA1LTMuMDVjLS45NS0uOTUtMi40OS0uOTUtMy40MywwbDguODctOC44N2MtLjk1Ljk1LS45NSwyLjQ5LDAsMy40M2wzLjA1LDMuMDVjLjk1Ljk1LDIuNDkuOTUsMy40MywwWiIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+';

export const GET = scaleMetadataImage.createAPI((page) => {
    return GenerateOGImage({
        title: page.data.title,
        description: page.data.description,
        icon: <img src={scaleIconDataURL} height={48} width={30} alt="svg"/>,
        site: 'Scale Documentation',
        primaryTextColor: 'rgb(240,240,240)',
        primaryColor: 'rgba(25,15,35,1)',
        fonts: [
            {
                name: 'Geist',
                data: font,
                weight: 400,
            },
            {
                name: 'Geist',
                data: fontBold,
                weight: 600,
            },
        ],
    });
});


export function generateStaticParams() {
    return scaleMetadataImage.generateParams();
}