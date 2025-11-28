document.addEventListener('DOMContentLoaded', () => {

    const minecraftBlock = document.getElementById('minecraftBlock');
    const textures = ['grass-texture', 'cobblestone-texture', 'mangrove-texture', 'ice-texture', 'jacko-texture']
    let currentTextureIndex = 0;

    minecraftBlock.addEventListener('click', () =>{

        minecraftBlock.classList.remove(textures[currentTextureIndex]);

        currentTextureIndex = (currentTextureIndex + 1) % textures.length;

        minecraftBlock.classList.add(textures[currentTextureIndex]);

        
    })
} ) 