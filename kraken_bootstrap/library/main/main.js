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


export var main = {

    parts: {
        avatar: avatar,
        card: card,
        cardGrid: cardGrid,
        jsontable: jsontable,
        pagination: pagination,
        star_rating: star_rating,
        table: table,
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