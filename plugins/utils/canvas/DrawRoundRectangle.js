import AddRoundRectanglePath from './AddRoundRectanglePath.js'

var DrawRoundRectangle = function (canvas, context, x, y, width, height, radiusConfig, fillStyle, strokeStyle, lineWidth, fillColor2, isHorizontalGradient) {
    AddRoundRectanglePath(context, x, y, width, height, radiusConfig);

    if (fillStyle !== undefined) {
        if (fillColor2 !== undefined) {
            var grd;
            if (isHorizontalGradient) {
                grd = context.createLinearGradient(0, 0, width, 0);
            } else {
                grd = context.createLinearGradient(0, 0, 0, height);
            }
            grd.addColorStop(0, fillStyle);
            grd.addColorStop(1, fillColor2);
            fillStyle = grd;
        }

        context.fillStyle = fillStyle;
        context.fill();
    }

    if (strokeStyle !== undefined) {
        context.strokeStyle = strokeStyle;
        context.lineWidth = lineWidth;
        context.stroke();
    }
}

export default DrawRoundRectangle;