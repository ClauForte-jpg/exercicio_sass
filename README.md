# Exercício LESS - EBAC

Este projeto cumpre todos os requisitos do exercício do módulo 17:

✅ Conversão do CSS para LESS  
✅ Uso de **variáveis**  
✅ Uso de **mapas** (`@cores` e `@espacos`)  
✅ Criação e aplicação de **mixins** (`.botao`, `.flex-center`, `.grid-columns`)  
✅ Uso de **escaping** (`width: ~"calc(100% - 20px)"`)  
✅ Estrutura organizada com divisão de arquivos:
- `variables.less`
- `mixins.less`
- `base.less`
- `layout.less`
- `components.less`
- `style.less`

✅ Compilação realizada com sucesso:
```bash
lessc "less/style.less" "build/styles/main.css"
