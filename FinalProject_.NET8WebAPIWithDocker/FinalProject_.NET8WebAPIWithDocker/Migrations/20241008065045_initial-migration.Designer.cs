﻿// <auto-generated />
using FinalProject_.NET8WebAPIWithDocker.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace FinalProject_.NET8WebAPIWithDocker.Migrations
{
    [DbContext(typeof(InsuranceContext))]
    [Migration("20241008065045_initial-migration")]
    partial class initialmigration
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("FinalProject_.NET8WebAPIWithDocker.Models.InsuranceModel", b =>
                {
                    b.Property<int>("PolicyNumber")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("PolicyNumber"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<double>("PolicyAmount")
                        .HasColumnType("double precision");

                    b.Property<string>("PolicyHolderName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("PolicyName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("PolicyTenure")
                        .HasColumnType("integer");

                    b.HasKey("PolicyNumber");

                    b.ToTable("Insurance");
                });
#pragma warning restore 612, 618
        }
    }
}
