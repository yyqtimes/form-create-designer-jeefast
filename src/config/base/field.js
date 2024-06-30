export default function field({t}) {
    return [
        {
            type: 'FieldSelect', //由FieldInput修改为FieldSelect
            field: 'field',
            value: '',
            title: t('form.field'),
        }, {
            type: 'input',
            field: 'title',
            value: '',
            title: t('form.title'),
        }, {
            type: 'input',
            field: 'info',
            value: '',
            title: t('form.info'),
        }, {
            type: 'SizeInput',
            field: 'formCreateWrap>labelWidth',
            value: '',
            title: t('form.labelWidth'),
        }, {
            type: 'Struct',
            field: '_control',
            value: [],
            title: t('form.control'),
            info: {
                native: true,
                effect: 'light',
                align: 'left',
                children: [{
                    type:'div',
                    domProps:{
                        innerHTML:t('form.document') + '：<a target="_blank" href="https://form-create.com/v3/guide/control">https://form-create.com/v3/guide/control</a>'
                    }
                }],
            },
            props: {
                defaultValue: [],
                validate(val) {
                    if (!Array.isArray(val)) return false;
                    if (!val.length) return true;
                    return !val.some(({rule}) => {
                        return !Array.isArray(rule);
                    });
                }
            }
        },
    ];
}
