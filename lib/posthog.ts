// Module imports
import {PostHog} from 'posthog-node'
import {cookies} from 'next/headers'

// Local imports
import {generateID} from '@/lib/generateID'

export async function PostHogBootstrap() {
    let distinct_id = ''
    const api_key = process.env.NEXT_PUBLIC_POSTHOG_KEY || '';
    if(api_key == '') {
        console.warn("PostHog API Key not found");
    }
    const cookieName = `ph_${api_key}_posthog`
    const cookieStore = cookies()
    const cookie = cookieStore.get(cookieName)
    if (cookie) {
        const phCookieParsed = JSON.parse(cookie.value);
        distinct_id = phCookieParsed.distinct_id;
    }
    if (!distinct_id) {
        distinct_id = generateID()
    }
    const client = new PostHog(api_key, {host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com'})
    const flags = await client.getAllFlags(distinct_id)
    return {
        distinctID: distinct_id,
        featureFlags: flags
    }
}
