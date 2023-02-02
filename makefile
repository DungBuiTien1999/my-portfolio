optimize/png:
		find src/** public/** -name "*.png" | xargs pngquant --skip-if-larger --strip --ext .png --verbose --force --speed 1

optimize/jpg:
		find src/** -name "*.jpg" | xargs jpegoptim --strip-all --all-progressive
		find src/** -name "*.jpeg" | xargs jpegoptim --strip-all --all-progressive
		find public/** -name "*.jpg" | xargs jpegoptim --strip-all --all-progressive
		find public/** -name "*.jpeg" | xargs jpegoptim --strip-all --all-progressive

optimize/svg:
		find src/** -name "*.svg" | xargs npx svgo --multipass
		find public/** -name "*.svg" | xargs npx svgo --multipass