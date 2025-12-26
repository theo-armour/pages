# AI 3D

## Ray Conditioning

Ray Conditioning:

Trading Photo-Consistency for Photo-realism in multi-view image generation

We propose ray conditioning, a lightweight and geometry-free technique for multi-view image generation.

Me:Elsewhere:, we see a move from triangles and polygons geometries to define 3D objects to point clouds and voxels. Could ray conditioning be an enhancement or another aspect to such a Paradigm shift.

GAN ~ https://en.wikipedia.org/wiki/Generative_adversarial_network

* https://ray-cond.github.io/

>Multi-view image generation attracts particular attention these days due to its promising 3D-related applications, e.g., image viewpoint editing. Most existing methods follow a paradigm where a 3D representation is first synthesized, and then rendered into 2D images to ensure photo-consistency across viewpoints. However, such explicit bias for photo-consistency sacrifices photo-realism, causing geometry artifacts and loss of fine-scale details when these methods are applied to edit real images. To address this issue, we propose ray conditioning, **a geometry-free alternative** that relaxes the photo-consistency constraint. Our method generates multi-view images by conditioning a 2D GAN on a light field prior. With explicit viewpoint control, state-of-the-art photo-realism and identity consistency, our method is particularly suited for the viewpoint editing task.
