<script lang="ts">
	import { createEventDispatcher } from 'svelte';
    import { TelInput, normalizedCountries, isSelected, clickOutsideAction } from "svelte-tel-input";
	import 'svelte-tel-input/styles/flags.css';

	export let clickOutside = true;
	export let closeOnClick = true;
	export let disabled = false;
	export let detailedValue = null;
	export let value = '+442071838750';
	export let searchPlaceholder = 'Search';

	let searchText = '';
	let isOpen = false;
	export let selectedCountry = 'GB';
	export let valid = true;
	export let options = { invalidateOnCountryChange: true };

	$: selectedCountryDialCode =
		normalizedCountries.find((el) => el.iso2 === selectedCountry)?.dialCode || null;

	const toggleDropDown = (e) => {
		e?.preventDefault();
		if (disabled) return;
		isOpen = !isOpen;
	};

	const closeDropdown = (e) => {
		if (isOpen) {
			e?.preventDefault();
			isOpen = false;
			searchText = '';
		}
	};

	const selectClick = () => {
		if (closeOnClick) closeDropdown();
	};

	const closeOnClickOutside = () => {
		if (clickOutside) {
			closeDropdown();
		}
	};

	const sortCountries = (countries, text) => {
		const normalizedText = text.trim().toLowerCase();
		if (!normalizedText) {
			return countries.sort((a, b) => a.label.localeCompare(b.label));
		}
		return countries.sort((a, b) => {
			const aNameLower = a.name.toLowerCase();
			const bNameLower = b.name.toLowerCase();
			const aStartsWith = aNameLower.startsWith(normalizedText);
			const bStartsWith = bNameLower.startsWith(normalizedText);
			if (aStartsWith && !bStartsWith) return -1;
			if (!aStartsWith && bStartsWith) return 1;
			const aIndex = aNameLower.indexOf(normalizedText);
			const bIndex = bNameLower.indexOf(normalizedText);
			if (aIndex === -1 && bIndex === -1) return a.id.localeCompare(b.id);
			if (aIndex === -1) return 1;
			if (bIndex === -1) return -1;
			const aWeight = aIndex + (aStartsWith ? 0 : 1);
			const bWeight = bIndex + (bStartsWith ? 0 : 1);
			return aWeight - bWeight;
		});
	};

	const handleSelect = (val, e?) => {
		if (disabled) return;
		e?.preventDefault();
		if (
			selectedCountry === undefined ||
			selectedCountry === null ||
			(typeof selectedCountry === typeof val && selectedCountry !== val)
		) {
			selectedCountry = val;
			onChange(val);
			selectClick();
		} else {
			dispatch('same', { option: val });
			selectClick();
		}
	};

	const dispatch = createEventDispatcher();

	const onChange = (selectedCountry) => {
		dispatch('change', { option: selectedCountry });
	};
</script>

<div
	class="input-group input-group-divider grid-cols-[auto_1fr_auto]"
>
	<select
		class="select"
        bind:value={selectedCountry}
    >
    {#each sortCountries(normalizedCountries, searchText) as country (country.id)}
		{@const isActive = isSelected(country.iso2, selectedCountry)}
        <option value={selectedCountryDialCode}>
			<!--  -->
						<div id="country-{country.iso2}" role="option" aria-selected={isActive}>
							<button
								value={country.iso2}
								type="button"
								class="inline-flex variant-primary-filled py-2 px-4 w-full text-sm  overflow-hidden
                            {isActive
									? 'bg-inherit dark:text-white'
									: 'dark:hover:text-white dark:text-gray-400'}"
								on:click={(e) => {
									handleSelect(country.iso2, e);
								}}
							>
								<div class="inline-flex items-center text-left">
									<span
										class="flag flag-{country.iso2.toLowerCase()} flex-shrink-0 mr-3"
									/>
									<span class="mr-2 text-inherit ">{country.name}</span>
									<span class="text-surface-300">+{country.dialCode}</span>
								</div>
							</button>
						</div>
        </option>
    {/each}

    </select>
	<TelInput
		id="tel-input"
		bind:country={selectedCountry}
		bind:detailedValue
		bind:value
		bind:valid
		{options}
		required={true}
		class="text-sm rounded-r-lg block w-full p-2.5 focus:outline-none bg-suface-700
		border border-gray-300 border-l-gray-100 
		dark:border-l-gray-700 dark:border-gray-600 bg-surface-50 dark:bg-surface-700 
        dark:placeholder-gray-400 dark:text-white text-gray-900"
	/>
</div>