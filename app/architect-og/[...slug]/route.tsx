import {GenerateDocsOGImage} from '@/components/OG/OG';
import {architectMetadataImage} from '@/lib/metadata';

const architectIconDataURL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEwIiBoZWlnaHQ9IjM2NCIgdmlld0JveD0iMCAwIDQxMCAzNjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzg1Ljc4NyAzNjMuODdMNDA5LjMyIDIzOS4zOTdMMzE3LjUxNiAyMS4xNjI1TDI0OC40NjEgMC44Njk5OTVMMjI3LjA4IDIzLjMzNjJMMzY1LjM2OSAzNjMuODdIMzg1Ljc4N1pNMjMuNjU3MiAzNjMuODdMMCAyMzkuMzk3TDkyLjI4NDYgMjEuMTYyNUwxNjEuNzAxIDAuODcwMDM3TDE4My4xOTQgMjMuMzM2Mkw0NC4xODAxIDM2My44N0gyMy42NTcyWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzE2XzMpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMTZfMyIgeDE9IjM2LjQ4NDMiIHkxPSI4OS44NzA1IiB4Mj0iMTkyLjg0MSIgeTI9IjM3NC4wNDIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzkzMzNFQSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM0RjQ2RTUiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K';

export const dynamic = 'force-static';

export const GET = architectMetadataImage.createAPI((page) => {
    return GenerateDocsOGImage({
        title: page.data.title,
        description: page.data.description || '',
        section: 'architect',
        icon: <img src={architectIconDataURL} height={48} width={56}/>,
    });
});

export function generateStaticParams() {
    return architectMetadataImage.generateParams();
}