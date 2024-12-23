// Module imports
import satori from 'satori';
import type {ReactNode} from "react";

// Local imports
import {NeueHaasGroteskBold, NeueHaasGroteskSemibold, NeueHaasGroteskMedium} from './fonts';

const LoopholeLabsLogoSource = 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjM3IiB3aWR0aD0iMTg5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSI+CiAgICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjN2UxMmRkIi8+CiAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYjUzMGRkIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJiIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjI3LjE5NCIgeDI9IjQuNzc3IiB4bGluazpocmVmPSIjYSIgeTE9IjQwLjYyOSIKICAgICAgICAgICAgICAgICAgICB5Mj0iOC4wMTEiLz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyMDQuNDI5IiB4Mj0iODMuNDg2IiB4bGluazpocmVmPSIjYSIgeTE9IjE4Ny4wNjIiCiAgICAgICAgICAgICAgICAgICAgeTI9IjExLjA3OSIvPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjE3OC42MDIiIHgyPSI4OC44MzQiIHhsaW5rOmhyZWY9IiNhIiB5MT0iMTI1LjkyMSIKICAgICAgICAgICAgICAgICAgICB5Mj0iLTQuNzAxIi8+CiAgICA8cGF0aCBkPSJNNDMuMDY2IDE1LjQ3MmgzLjAxNnYxMi4yMDRoNS4xMjJ2Mi44NjNoLTguMTM4em0yMS4yNjEgOS4yMTFhNi4xMzEgNi4xMzEgMCAxIDEtNi4yMDgtNi4xNDMgNi4wOSA2LjA5IDAgMCAxIDYuMjA4IDYuMTQzem0tOS4zMTMgMGMwIDEuOTgxIDEuMjU1IDMuMzkgMy4xNDkgMy4zOWEzLjE2MyAzLjE2MyAwIDAgMCAzLjIxNC0zLjM2OWMwLTEuOTgtMS4yOTktMy4zOS0zLjIxNC0zLjM5YTMuMTYzIDMuMTYzIDAgMCAwLTMuMTQ5IDMuMzY5em0yMi44NTYgMGE2LjEzMiA2LjEzMiAwIDEgMS02LjIwOS02LjE0MyA2LjA5MSA2LjA5MSAwIDAgMSA2LjIwOSA2LjE0M3ptLTkuMzEzIDBjMCAxLjk4MSAxLjI1NSAzLjM5IDMuMTQ5IDMuMzlhMy4xNjMgMy4xNjMgMCAwIDAgMy4yMTMtMy4zNjljMC0xLjk4MS0xLjI5OC0zLjM5LTMuMjEzLTMuMzlhMy4xNjMgMy4xNjMgMCAwIDAtMy4xNDkgMy4zNjl6bTE0LjA3Mi00LjU1OGE1LjAyIDUuMDIgMCAwIDEgMy42NzYtMS41ODVjMy4wMTYgMCA1LjUyNiAyLjUxIDUuNTI2IDYuMTY0IDAgMy41ODktMi42MiA2LjE0My01LjU5MiA2LjE0M2E0Ljg5IDQuODkgMCAwIDEtMy42MS0xLjU0MnY1LjUwNUg3OS43VjE4Ljg0OGgyLjkyOXptLS4xMzMgNC41MzVjMCAyLjExNCAxLjQxIDMuNTAxIDMuMjE1IDMuNTAxIDEuODI3IDAgMy4xNy0xLjQ3NiAzLjE3LTMuNDc4IDAtMS45MTYtMS4yMzMtMy40NTctMy4xNy0zLjQ1Ny0xLjg3MSAwLTMuMjE1IDEuMzg3LTMuMjE1IDMuNDM0em0xMS4yMDktOS41ODVoMi45Mjh2NC45NjJhNS4xODcgNS4xODcgMCAwIDEgMy40NTctMS40OTdjMi4yMDEgMCA0LjAwNiAxLjQzIDQuMDA2IDQuMjd2Ny43MjhoLTIuOTI4di01LjUyNmMwLTIuMzc3LS4yODYtMy43ODYtMi4wMDMtMy43ODZhMi4zMTcgMi4zMTcgMCAwIDAtMS45ODIgMS4xNDVjLS41OTQuOTI0LS41NSAxLjk4MS0uNTUgMy4xOTJ2NC45NzVoLTIuOTI4em0yNC4zNTIgOS42MDhhNi4xMzYgNi4xMzYgMCAwIDEtMy43NzUgNS42NSA2LjEzMyA2LjEzMyAwIDAgMS04LjA0Mi03Ljk1NyA2LjEyNiA2LjEyNiAwIDAgMSA1LjYwOS0zLjgzNiA2LjA5MSA2LjA5MSAwIDAgMSA2LjIwOCA2LjE0M3ptLTkuMzEzIDBjMCAxLjk4MSAxLjI1NSAzLjM5IDMuMTQ5IDMuMzlhMy4xNjUgMy4xNjUgMCAwIDAgMy4yMTQtMy4zNjljMC0xLjk4MS0xLjI5OS0zLjM5LTMuMjE0LTMuMzlhMy4xNiAzLjE2IDAgMCAwLTIuOTcxIDIuMDk4Yy0uMTQ1LjQwNy0uMjA2Ljg0LS4xNzggMS4yN3ptMTAuODU3LTkuNjA4aDIuOTI4djE1LjQ2M2gtMi45Mjh6bTE1Ljk4NCAxMy4xOTVjLTEuMjU1IDEuNzg0LTIuOTA2IDIuNTc3LTUuMzcyIDIuNTc3YTUuOTIgNS45MiAwIDAgMS02LjEyLTYuMTY0IDUuOTggNS45OCAwIDAgMSAzLjcyLTUuNzAzIDUuOTY5IDUuOTY5IDAgMCAxIDIuMzU3LS40NGMzLjY5OCAwIDYuMjA4IDIuNjQyIDYuMjA4IDYuMzQgMCAuMjY1LS4wMjIuMzk2LS4wMjIuNjYxaC05LjQyM2EzLjEzIDMuMTMgMCAwIDAgMy4yOCAyLjcwOCAzLjc4NyAzLjc4NyAwIDAgMCAyLjkwNy0xLjE0NXptLTIuMTU3LTUuMDQxYTMuNDA2IDMuNDA2IDAgMCAwLTMuMTgyLTIuMjAyIDMuMzk3IDMuMzk3IDAgMCAwLTMuMTgxIDIuMjAyem0xMC42ODItNy43NTdoMy4wMTZ2MTIuMjA0aDUuMTIydjIuODYzaC04LjEzOHptMTguMjAxIDEzLjgzM2E0Ljg1NyA0Ljg1NyAwIDAgMS0zLjYxIDEuNTQyYy0yLjk3MyAwLTUuNTctMi41NTQtNS41Ny02LjE0MyAwLTMuNjU1IDIuNDY1LTYuMTY0IDUuNTAzLTYuMTY0YTUuMDI2IDUuMDI2IDAgMCAxIDMuNjc3IDEuNTg1di0xLjI3NmgyLjkyOHYxMS42OWgtMi45Mjh6bS02LjIzMS00LjYyM2MwIDIuMDAzIDEuMzIyIDMuNDc5IDMuMTQ5IDMuNDc5IDEuODA2IDAgMy4yMTUtMS4zNjUgMy4yMTUtMy41IDAtMi4wNDgtMS4zNjUtMy40MzUtMy4yMTUtMy40MzUtMS45MzcgMC0zLjE0OSAxLjU0MS0zLjE0OSAzLjQ1NnptMTQuNDkgNS44NTZoLTIuOTI4VjE1LjA3NWgyLjkyOHY1LjA1YTUuMDIzIDUuMDIzIDAgMCAxIDMuNjc3LTEuNTg1YzMuMDE2IDAgNS41MjUgMi41MSA1LjUyNSA2LjE2NCAwIDMuNTg4LTIuNjE5IDYuMTQzLTUuNTkyIDYuMTQzYTQuODkgNC44OSAwIDAgMS0zLjYxLTEuNTQyem0tLjEzMi01Ljg3OGMwIDIuMTE0IDEuNDA5IDMuNSAzLjIxNCAzLjUgMS44MjcgMCAzLjE3MS0xLjQ3NSAzLjE3MS0zLjQ3OCAwLTEuOTE1LTEuMjM0LTMuNDU2LTMuMTcxLTMuNDU2LTEuODcxIDAtMy4yMTQgMS4zODctMy4yMTQgMy40MzR6bTEzLjUyLjgxNGMtMS44NzEtLjk0Ni0yLjgxOC0yLjA5LTIuODE4LTMuNTY2IDAtMS44MjcgMS41NDEtMy4zNjggMy43ODctMy4zNjhhNC43NiA0Ljc2IDAgMCAxIDMuODUyIDEuOTM3bC0xLjgwNCAxLjgyN2EzLjAwMyAzLjAwMyAwIDAgMC0yLjAyNi0xLjA3OGMtLjU5NCAwLTEuMDU3LjI0Mi0xLjA1Ny43MDQgMCAuNDQuNDE5LjYzOSAxLjA1Ny45NjlsMS4wNzkuNTVjMS45MzcuOTkgMi45NzIgMi4wMDQgMi45NzIgMy43NDMgMCAyLjA5MS0xLjY1MSAzLjY1NS00LjIwNiAzLjY1NWE0LjkzOSA0LjkzOSAwIDAgMS00LjA5NC0yLjAwNGwxLjgwNS0xLjk4MWEzLjY2OCAzLjY2OCAwIDAgMCAyLjQ0NCAxLjM2NWMuNzI2IDAgMS4yOTktLjQxOSAxLjI5OS0uOTQ3IDAtLjUwNy0uNDg0LS44OC0xLjI5OS0xLjN6IgogICAgICAgICAgZmlsbD0iI0ZGRkZGRiIvPgogICAgPHBhdGggZD0ibTMzLjY2IDIyLjg3MS00Ljc0OC04LjIyM0gxOC4zNTVMMTIuODMgMjcuMzVINi45MWwtMi41ODctNC40NzkgMi41ODYtNC40NzhoMi45OTVsLTIuNTUgNS45ODIuNjM2IDEuMTAyaDIuOTY1bDQuNDg5LTEwLjUyOFYxMi40aDcuOTE2VjguNjU2SDEwLjNWMTIuNGgxLjR2MS43ODJsLS4xOTguNDY1SDQuNzQ4TDAgMjIuODdsNC43NDggOC4yMjRoMTAuNjk3bDUuMzg0LTEyLjcwMmg1LjkybDIuNTg3IDQuNDc4LTIuMTEyIDMuNjU4LTIuNjcxLTYuMjY0aC0yLjIzNWwtLjkxMSAyLjE3IDQuNDkgMTAuNTMzSDMuNjkxbC0uNDg1IDEuMTM4IDEuNzIyIDIuNjA3aDIzLjgwNGwxLjcyMi0yLjYwNy0xLjM5NC0zLjI2OHoiCiAgICAgICAgICBmaWxsPSJ1cmwoI2IpIi8+CiAgICA8cGF0aCBkPSJtMTQuNDggMS44OC0yLjQwOCAyLjQwNyAyLjQwOCAyLjQwNyAyLjQwNy0yLjQwN3oiIGZpbGw9InVybCgjYykiLz4KICAgIDxwYXRoIGQ9Ik0xOS44MDEuNzEzIDE4LjAxNCAyLjVsMS43ODcgMS43ODdMMjEuNTg4IDIuNXoiIGZpbGw9InVybCgjZCkiLz4KPC9zdmc+'

const fonts = [
    {
        name: 'NeueHaasGrotesk',
        data: NeueHaasGroteskBold,
        weight: 700,
    },
    {
        name: 'NeueHaasGrotesk',
        data: NeueHaasGroteskSemibold,
        weight: 600,
    },
    {
        name: 'NeueHaasGrotesk',
        data: NeueHaasGroteskMedium,
        weight: 500,
    }
]

interface DocsOGImageProps {
    env: CloudflareEnv
    title: string
    description: string
    section: string,
    icon: ReactNode
}

export async function GenerateDocsOGImage(props: DocsOGImageProps) {
    if (process.env.OPEN_NEXT_ORIGIN === undefined) {
        return new Response(null, {
            status: 404,
        })
    }
    const svg = await satori(DocsOGImage(props), {
        width: 1200,
        height: 630,
        // @ts-ignore
        fonts: fonts,
    });
    // @ts-ignore
    const png = await props.env.SVG2PNG.convert(svg)
    return new Response(png, { headers: { 'content-type': 'image/png' } });
}

export function DocsOGImage({title, description, section, icon}: DocsOGImageProps) {
    return (
        <div style={{
            width: '1200px',
            height: '630px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            backgroundColor: '#0c0a10',
            padding: '60px',
            fontFamily: 'NeueHaasGrotesk, sans-serif',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '24px',
                    padding: '8px 12px',
                }}>
                    {icon}
                    <h1 style={{
                        fontSize: '72px',
                        fontWeight: '700',
                        color: '#FFF',
                        lineHeight: '1.1',
                        margin: '0',
                        maxWidth: '1080px',
                        textTransform: 'capitalize',
                    }}>
                        {section} documentation
                    </h1>
                </div>
                <h1 style={{
                    fontSize: '72px',
                    fontWeight: '600',
                    color: '#FFF',
                    lineHeight: '1.1',
                    margin: '0',
                    maxWidth: '1080px',
                }}>
                    {title}
                </h1>
                <p style={{
                    fontSize: '40px',
                    lineHeight: '1.5',
                    fontWeight: '600',
                    color: '#FFF',
                    opacity: 0.80,
                    margin: '0',
                    maxWidth: '1080px',
                }}>
                    {description}
                </p>
            </div>
            <div style={{
                display: 'flex',
                marginTop: 'auto',
                alignItems: 'center',
                justifyContent: 'flex-end',
            }}>
                <img src={LoopholeLabsLogoSource} style={{height: '80px'}}/>
            </div>
        </div>
    )
}