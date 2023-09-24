<script>
    export let sliderValue;
    function toRomanNumeralsWithLabel(num) {
        const romanNumerals = [
            { value: 1000, numeral: "M" },
            { value: 900, numeral: "CM" },
            { value: 500, numeral: "D" },
            { value: 400, numeral: "CD" },
            { value: 100, numeral: "C" },
            { value: 90, numeral: "XC" },
            { value: 50, numeral: "L" },
            { value: 40, numeral: "XL" },
            { value: 10, numeral: "X" },
            { value: 9, numeral: "IX" },
            { value: 5, numeral: "V" },
            { value: 4, numeral: "IV" },
            { value: 1, numeral: "I" }
        ];

        let label = "A.D.";
        if (num < 0) {
            label = "B.C.";
            num = Math.abs(num);
        }

        let result = "";
        for (const pair of romanNumerals) {
            while (num >= pair.value) {
                result += pair.numeral;
                num -= pair.value;
            }
        }
        return `${result} ${label}`;
    }
</script>


<div class="yearSlide">
    <input type="range" min="-20" max="21" bind:value={sliderValue} class="slider" id="yearRange">
    <p>Century: {toRomanNumeralsWithLabel(sliderValue)}</p>
</div>


<style>
    .yearSlide{
        padding: 2em;
    }
    .slider {
        -webkit-appearance: none;
        width: 100%;
        height: 15px;
        border-radius: 5px;
        background: #d3d3d3;
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s;
        transition: opacity .2s;
    }

    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: lavender;
        cursor: pointer;
    }

    .slider::-moz-range-thumb {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: lavender;
        cursor: pointer;
    }
</style>