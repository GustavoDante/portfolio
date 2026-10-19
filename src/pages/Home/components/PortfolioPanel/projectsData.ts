import bolsasDesktop from '../../../../assets/projects/bolsas-desktop.webp'
import bolsasMobile from '../../../../assets/projects/bolsas-mobile.webp'
import facyalDesktop from '../../../../assets/projects/facyal-desktop.webp'
import facyalMobile from '../../../../assets/projects/facyal-mobile.webp'
import indiespensavelDesktop from '../../../../assets/projects/indiespensavel-desktop.webp'
import indiespensavelMobile from '../../../../assets/projects/indiespensavel-mobile.webp'
import jukeboxDesktop from '../../../../assets/projects/jukebox-desktop.webp'
import jukeboxMobile from '../../../../assets/projects/jukebox-mobile.webp'
import lauanaDesktop from '../../../../assets/projects/lauana-desktop.webp'
import lauanaMobile from '../../../../assets/projects/lauana-mobile.webp'
import niltonDesktop from '../../../../assets/projects/nilton-desktop.webp'
import niltonMobile from '../../../../assets/projects/nilton-mobile.webp'
import sinthoscpeDesktop from '../../../../assets/projects/sinthoscpe-desktop.webp'
import sinthoscpeMobile from '../../../../assets/projects/sinthoscpe-mobile.webp'
import vitarisxDesktop from '../../../../assets/projects/vitarisx-desktop.webp'
import vitarisxMobile from '../../../../assets/projects/vitarisx-mobile.webp'
import watchgatherDesktop from '../../../../assets/projects/watchgather-desktop.webp'
import watchgatherMobile from '../../../../assets/projects/watchgather-mobile.webp'
import wellysonDesktop from '../../../../assets/projects/wellyson-desktop.webp'
import wellysonMobile from '../../../../assets/projects/wellyson-mobile.webp'

export type ProjectKey =
  | 'facyal'
  | 'vitarisx'
  | 'bolsas'
  | 'jukebox'
  | 'watchgather'
  | 'indiespensavel'
  | 'sinthoscpe'
  | 'lauana'
  | 'nilton'
  | 'wellyson'

export type ProjectCategory = 'platform' | 'site'

export type ProjectLink = { label: string; url: string }

export type ProjectData = {
  key: ProjectKey
  category: ProjectCategory
  links: ProjectLink[]
  tags: string[]
  desktop: string
  mobile: string
}

export const projects: ProjectData[] = [
  {
    key: 'facyal',
    category: 'platform',
    links: [
      { label: 'facyalclinic.com', url: 'https://facyalclinic.com' },
      { label: 'app.facyalclinic.com', url: 'https://app.facyalclinic.com' },
    ],
    tags: [
      'Next.js 16',
      'NestJS 11',
      'Prisma 7',
      'PostgreSQL',
      'Zod 4',
      'Turborepo',
      'Tailwind CSS',
      'FullCalendar',
    ],
    desktop: facyalDesktop,
    mobile: facyalMobile,
  },
  {
    key: 'vitarisx',
    category: 'platform',
    links: [{ label: 'vitarisx.com', url: 'https://vitarisx.com' }],
    tags: [
      'Next.js 16',
      'NestJS 11',
      'Prisma 7',
      'PostgreSQL',
      'SSE',
      'Zod 4',
      'Turborepo',
    ],
    desktop: vitarisxDesktop,
    mobile: vitarisxMobile,
  },
  {
    key: 'bolsas',
    category: 'platform',
    links: [
      { label: 'bolsas.gustavodante.com', url: 'https://bolsas.gustavodante.com' },
    ],
    tags: [
      'Next.js 16',
      'NestJS 11',
      'Prisma 7',
      'PostgreSQL',
      'Zod 4',
      'Recharts',
      'Turborepo',
    ],
    desktop: bolsasDesktop,
    mobile: bolsasMobile,
  },
  {
    key: 'jukebox',
    category: 'platform',
    links: [
      { label: 'jukebox.gustavodante.com', url: 'https://jukebox.gustavodante.com' },
    ],
    tags: [
      'Next.js 15',
      'NestJS 11',
      'Prisma 7',
      'PostgreSQL',
      'YouTube IFrame API',
      'Framer Motion',
    ],
    desktop: jukeboxDesktop,
    mobile: jukeboxMobile,
  },
  {
    key: 'watchgather',
    category: 'platform',
    links: [
      {
        label: 'watchgather.gustavodante.com',
        url: 'https://watchgather.gustavodante.com',
      },
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'TMDB API'],
    desktop: watchgatherDesktop,
    mobile: watchgatherMobile,
  },
  {
    key: 'indiespensavel',
    category: 'site',
    links: [
      {
        label: 'indiespensavel.gustavodante.com',
        url: 'https://indiespensavel.gustavodante.com',
      },
    ],
    tags: ['Next.js 14', 'React 18', 'Tailwind CSS', 'Stripe', 'Zod'],
    desktop: indiespensavelDesktop,
    mobile: indiespensavelMobile,
  },
  {
    key: 'sinthoscpe',
    category: 'site',
    links: [{ label: 'sinthoscpe.com.br', url: 'https://sinthoscpe.com.br' }],
    tags: ['Next.js 16', 'React 19', 'Tailwind CSS', 'Framer Motion', 'Resend'],
    desktop: sinthoscpeDesktop,
    mobile: sinthoscpeMobile,
  },
  {
    key: 'lauana',
    category: 'site',
    links: [
      {
        label: 'lauanabeautyclinic.com.br',
        url: 'https://lauanabeautyclinic.com.br',
      },
    ],
    tags: ['Next.js 16', 'React 19', 'Tailwind CSS'],
    desktop: lauanaDesktop,
    mobile: lauanaMobile,
  },
  {
    key: 'nilton',
    category: 'site',
    links: [
      { label: 'drniltonbarros.com.br', url: 'https://drniltonbarros.com.br' },
    ],
    tags: ['Next.js 16', 'React 19', 'Tailwind CSS', 'Zod'],
    desktop: niltonDesktop,
    mobile: niltonMobile,
  },
  {
    key: 'wellyson',
    category: 'site',
    links: [{ label: 'wellyson.com', url: 'https://wellyson.com' }],
    tags: ['HTML 5', 'CSS 3', 'JavaScript'],
    desktop: wellysonDesktop,
    mobile: wellysonMobile,
  },
]
