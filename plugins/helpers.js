import layout from '@/static/data/layout'
import layoutadmin from '@/static/data/layoutadmin'
export default function ({ store, redirect }, inject) {

   

 
    
    const getParametreMenu = (array) => {
        let layoutPrincipal = layoutadmin.menuItems
        let menu = []
        layoutPrincipal?.map((item) => {
            // if (hasPermission(item.name))
            menu = [...menu, item]
        })

        return menu
    }
    const getLibelleByKey = (key) => {
        const libelles = {

            'date_debut': 'Date de début',
            'true': 'Oui',
            'false': 'Non',

        };

        return libelles[key] || key;
    };

    const removeDuplicates = (array) => {
        let uniq = {};
        return array.filter(obj => !uniq[obj.id] && (uniq[obj.id] = true))
    }

    const getColore = (status) => {
        switch (status) {
            case true: return 'green'
                break;
            case 'actif': return 'green'
                break;
            case 'livre': return 'green'
                break;
            case 'innactif': return 'orange'
                break;
            case 'suspendu': return 'red'
                break;
            case false: return 'red'
                break;
            case 'encours': return 'yellow'
                break;
            case 'brouillon': return 'blue'
                break;
            case 'INIT': return 'green'
                break;
            case 'necessaire': return 'blue'
                break;
            case 'recu': return 'green'
                break;
            case 'delivre': return 'green'
                break;
            case 'desactive': return 'red'
                break;
            case 'rejete': return 'red'
                break;
            default: return ''
        }
    }
    const getNameBySlug = (slug) => {
        switch (slug) {
            case 'brouillon': return 'Brouillon'
                break;
            case 'US Dollar': return 'US Dollar ($)'
                break;
            case 'Euro': return 'Euro (€)'
                break;
            default: return slug
        }
    }
   
  
    inject('removeDuplicates', removeDuplicates)
    inject('getColore', getColore)
    inject('getNameBySlug', getNameBySlug)
    inject('getParametreMenu', getParametreMenu)
    inject('getLibelleByKey', getLibelleByKey)
}