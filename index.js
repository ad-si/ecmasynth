'use strict'

for (let i = 0; i < 100000; i++) {
	process.stdout.write(128 + Math.round(127 * Math.sin(i/5)))
}
