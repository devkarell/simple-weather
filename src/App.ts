import './styles/global.scss';
import './modules/dashboardHandler';
import { isProvinceValid } from './modules/regionValidator';
import './modules/provincesFiller';

$('#province-input').select2({
    placeholder: 'Estado',
    allowClear: true,
    language: 'pt-BR',
    maximumInputLength: 23,
});

$('#province-input').on('select2:select', isProvinceValid);
