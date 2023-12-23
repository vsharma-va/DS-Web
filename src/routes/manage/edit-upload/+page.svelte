<script lang="ts">
    import ProductCard from "$lib/common/ProductCard.svelte";

    export let data: import("mongodb").WithId<Document>[];
</script>

<div
    class="flex flex-col items-center justify-center gap-5 xl:px-[39px] md:px-[30px] px-[10px] pt-[75px] w-full h-fit"
>
    {#each data.cardData as cardData}
        <p class="primary-font text-xl">{cardData.uuid}</p>
        <div class="lg:w-[45%] xl:w-[30%] w-full">
            <ProductCard
                cardTitle={cardData.card_heading}
                cardAuthor={cardData.card_author}
                upcoming={cardData.upcoming}
                editState={true}
                linkTo={`/manage/edit-upload/${cardData.uuid}`}
            />
        </div>
    {/each}
</div>
