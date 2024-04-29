import { avatar } from './avatar/avatar.js';

import { card } from './card/card.js';

import { cardGrid } from './cardGrid/cardGrid.js';
import { table } from './table/table.js';
import { hero } from './hero/hero.js';
import { features } from './features/features.js';
import { pricing } from './pricing/pricing.js';
import { header } from './header/header.js';
import { footer } from './footer/footer.js';
import { pagination } from './pagination/pagination.js';
import { star_rating } from './star_rating/star_rating.js';
import { testimonial } from './testimonial/testimonial.js';
import { invoice } from './invoice/invoice.js';
import { jsonTable } from './jsonTable/jsonTable.js'
import { chart } from './chart/chart.js'
import { menu } from './menu/menu.js'

export var main = {
    avatar: avatar,
    card: card,
    cardGrid: cardGrid,
    jsontable: jsonTable,
    pagination: pagination,
    star_rating: star_rating,
    table: table,
    menu: menu,
    features: features,
    footer: footer,
    header: header,
    hero: hero,
    invoice: invoice,
    pricing: pricing,
    testimonial: testimonial,
    parts: {
        avatar: avatar,
        card: card,
        cardGrid: cardGrid,
        jsontable: jsonTable,
        pagination: pagination,
        star_rating: star_rating,
        table: table,
        menu: menu
    },
    components: {
        features: features,
        footer: footer,
        header: header,
        hero: hero,
        invoice: invoice,
        pricing: pricing,
        testimonial: testimonial
    }

}